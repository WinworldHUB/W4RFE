import { FC, useContext, useEffect, useMemo, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import { Link, useNavigate } from "react-router-dom";
import {
  DEFAULT_PACKAGES,
  EMPTY_DELIVERY_DETAILS,
  EMPTY_STRING,
  GBP_SYMBOL,
  PageRoutes,
} from "../lib/constants";
import Slider from "../lib/components/slider";
import { Member, Order, PackagingType, Product } from "../lib/awsApis";
import useOrder from "../lib/hooks/useOrder";
import useApi from "../lib/hooks/useApi";
import { ORDERS_APIS } from "../lib/constants/api-constants";
import { CartContext } from "../lib/contexts/cart-context";
import { getArrayFromTo } from "../lib/utils/array-utils";
import { AppContext } from "../lib/contexts/app-context";
import {
  calculateOrderValue,
  getOrderFromVM,
  isDeliveryDetailsValid,
  trimOrder,
} from "../lib/utils/order-utils";
import {
  Alert,
  Card,
  CardHeader,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import ProductMobileTile from "../lib/components/product-mobile-tile";
import { formatCurrency } from "../lib/utils/utils";

const PAGE_TITLES = [
  {
    id: "01",
    title: "Shipping details",
  },
  {
    id: "02",
    title: "Products",
  },
  {
    id: "03",
    title: "Review",
  },
  {
    id: "04",
    title: "Order placed",
  },
] as PageTitleItem[];

const Cart: FC<PageProps> = (pageProps) => {
  const { data: orders, getData: getOrders } = useApi<Order[]>();
  const { postData: createOrder } = useApi<Order>();
  const { order, updateOrder, clearOrder } = useOrder(orders?.length);
  const {
    products,
    removeProduct,
    updateProduct,
    clearState: clearCart,
  } = useContext(CartContext);
  const navigateTo = useNavigate();
  const { appState } = useContext(AppContext);
  const [isTermsAgreed, setIsTermsAgreed] = useState<boolean>(false);
  const [isOrderCreated, setIsOrderCreated] = useState<boolean>(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [deliveryDetails, setDeliveryDetails] = useState<OrderDeliveryDetails>(
    EMPTY_DELIVERY_DETAILS
  );

  if (products?.length === 0) {
    alert("Please add some products to cart to continue.");
    navigateTo(PageRoutes.Home);
  }

  useEffect(() => {
    if (appState?.member) {
      setDeliveryDetails({
        ...deliveryDetails,
        memberName: appState.member["name"] ?? EMPTY_STRING,
        memberEmail: appState.member["email"] ?? EMPTY_STRING,
        memberPhone: appState.member["phone"] ?? EMPTY_STRING,
        deliverTo: appState.member["name"] ?? EMPTY_STRING,
        instagramHandle: appState.member["instagramHandle"] ?? EMPTY_STRING,
      });
    }
  }, [appState?.member]);

  useEffect(() => {
    getOrders(ORDERS_APIS.GET_ALL_ORDERS_API);
    updateOrder({
      ...order,
      deliveryDetails: JSON.stringify(deliveryDetails),
      packagingType: PackagingType[DEFAULT_PACKAGES[0].id],
      packaging: DEFAULT_PACKAGES[0],
      member: appState.member as Member,
    });
  }, []);

  useEffect(() => {
    if (
      appState?.member &&
      (order.member === undefined || order.member === null)
    ) {
      updateOrder({
        ...order,
        member: appState.member as Member,
      });
    }
  }, [appState?.member, currentPageIndex]);

  const totalOrderQuantity = useMemo<number>(
    () =>
      products
        ? products.reduce((total, product) => total + product.quantity ?? 0, 0)
        : 0,
    [products]
  );

  const totalOrderValue = useMemo<number>(
    () =>
      products
        ? products.reduce(
            (total, product) =>
              total + (product?.quantity ?? 0) * (product?.price ?? 0),
            0
          )
        : 0,
    [products]
  );

  const handleSizeUpdate = (
    productIndex: number,
    selectedSizeIndex: number
  ) => {
    const updatedProduct = products[productIndex] as Product;
    const productVariants = JSON.parse(
      updatedProduct.variants
    ) as ProductVariant[];

    updatedProduct.size = productVariants[selectedSizeIndex].size;
    updatedProduct.price = productVariants[selectedSizeIndex].price;
    console.log(updatedProduct);
    updateProduct(updatedProduct, productIndex);
  };

  const handleQuantityUpdate = (
    productIndex: number,
    selectedQuantity: number
  ) => {
    const updatedProduct = products[productIndex] as Product;
    updatedProduct.quantity = selectedQuantity;
    updateProduct(updatedProduct, productIndex);
  };

  const handlePackageUpdate = (selectedPackaging: Packaging) => {
    updateOrder({
      ...order,
      packagingType: PackagingType[selectedPackaging.id],
      packaging: selectedPackaging,
    });
  };

  const handleNext = () => {
    if (currentPageIndex < PAGE_TITLES.length) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };
  const handleBack = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };
  const packaging: Packaging | undefined = useMemo(
    () =>
      DEFAULT_PACKAGES.find(
        (pack: Packaging) => pack.id === order.packagingType
      ),
    [order.packagingType]
  );

  // Calculate the shipping charges
  const shippingCharges: number = useMemo(
    () => (packaging ? packaging.cost * totalOrderQuantity : 0),
    [packaging, totalOrderQuantity]
  );

  // Calculate the order total
  const orderTotal: number = calculateOrderValue(products, shippingCharges);

  useEffect(() => {
    if (order) {
      updateOrder({
        ...order,
        products: products,
        deliveryDetails: JSON.stringify(deliveryDetails),
        orderValue: orderTotal,
        member: appState.member as Member,
      });
    }
  }, [products, deliveryDetails]);
  console.log("Shipping Charges:", shippingCharges);
  console.log("Order Total:", orderTotal);

  const processOrderCreation = async (): Promise<boolean> => {
    const createdOrder = await createOrder(
      ORDERS_APIS.ADD_ORDER_API,
      trimOrder(getOrderFromVM({ ...order, orderValue: orderTotal }), true)
    );

    if (createdOrder) {
      getOrders(ORDERS_APIS.GET_ALL_ORDERS_API);
      setIsOrderCreated(true);
      clearOrder();
      clearCart();

      alert(
        "Your order has been processed successfully.\nPlease see your email with instructions on how to complete your order"
      );
      navigateTo(PageRoutes.Orders);

      return true;
    }

    setIsOrderCreated(false);
    return false;
  };

  const isValid = useMemo(() => {
    switch (currentPageIndex) {
      case 0:
        return isDeliveryDetailsValid(JSON.stringify(deliveryDetails));

      case 1:
        return (
          totalOrderQuantity >= order?.packaging?.minQuantity &&
          totalOrderQuantity <= order?.packaging?.maxQuantity
        );

      case 2:
        return isTermsAgreed;

      case 3:
        return processOrderCreation();

      default:
        return false;
    }
  }, [currentPageIndex, order, isTermsAgreed]);

  return (
    <PageLayout {...pageProps}>
      <div className="mt-process-sec">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul className="list-unstyled process-list">
                {PAGE_TITLES.map((item, index) => (
                  <li
                    className={index <= currentPageIndex ? "active" : ""}
                    key={`${item.title}-${item.id}-${index}`}
                  >
                    <span className="counter">{item.id}</span>
                    <strong className="title">{item.title}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Slider
          slideTo={currentPageIndex}
          slidesPerView={1}
          autoHeight={true}
          isAllowManualSlide={false}
          isAutoPlay={false}
        >
          <form action="#" className="">
            <h2>{PAGE_TITLES[currentPageIndex].title}</h2>
            <Alert>
              Receive your bulk order directly from our suppliers via 2
              different shipping methods
            </Alert>
            <p>
              <strong>Select Packaging type</strong>
            </p>
            <fieldset>
              <div className="form-group">
                <select
                  className="form-control"
                  title="Package Type"
                  value={order?.packaging?.id ?? DEFAULT_PACKAGES[0].id}
                  onChange={(e) =>
                    handlePackageUpdate(
                      DEFAULT_PACKAGES[e.target.selectedIndex]
                    )
                  }
                >
                  {DEFAULT_PACKAGES.map((packageType, index) => (
                    <option value={packageType.id} key={packageType.title}>
                      {packageType.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="row p-2 bg-light rounded mt-3">
                <div className="col-md-2">Package description:</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: order?.packaging?.description.replace(
                      /\n/g,
                      "<br />"
                    ),
                  }}
                  className="col-md-10"
                ></div>
                <div className="col-md-2">Minimum quantity:</div>
                <div className="col-md-10">{order?.packaging?.minQuantity}</div>
                <div className="col-md-2">Maximum quantity:</div>
                <div className="col-md-10">{order?.packaging?.maxQuantity}</div>
                <div className="col-md-2">Cost:</div>
                <div className="col-md-10">£{order?.packaging?.cost}</div>
              </div>
            </fieldset>
            <br />
            <fieldset>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={deliveryDetails.memberEmail}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      memberEmail: e.target.value,
                    })
                  }
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  value={deliveryDetails.memberPhone}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      memberPhone: e.target.value,
                    })
                  }
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Deliver to (Full name)"
                  value={deliveryDetails.deliverTo}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      deliverTo: e.target.value,
                    })
                  }
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Instagram handle"
                  value={deliveryDetails.instagramHandle}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      instagramHandle: e.target.value,
                    })
                  }
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Deliver at (complete address)"
                  value={deliveryDetails.deliverAt}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      deliverAt: e.target.value,
                    })
                  }
                />
              </div>
            </fieldset>
          </form>
          <div>
            <h2>{PAGE_TITLES[currentPageIndex].title}</h2>
            <table className="table d-sm-block d-none">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {(products ?? []).map((product, pIndex) => {
                  const productVariants =
                    typeof product?.variants === "string"
                      ? (JSON.parse(product.variants) as ProductVariant[])
                      : (product?.variants as ProductVariant[]);
                  return (
                    <tr key={product?.id}>
                      <td className="">
                        <img
                          className="thumbnail-50"
                          src={product?.featuredImage}
                          alt={product?.title}
                        />
                      </td>
                      <td className="align-middle" width={"50%"}>
                        {product?.title}
                      </td>
                      <td className="" width={"20%"}>
                        <select
                          className="form-control"
                          title="Product size"
                          value={product?.size ?? ""}
                          onChange={(e) =>
                            handleSizeUpdate(pIndex, e.target.selectedIndex)
                          }
                        >
                          {(productVariants ?? []).map((variant) => (
                            <option value={variant.size} key={variant.size}>
                              {variant.size} (£{variant.price})
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="" width={"20%"}>
                        <select
                          className="form-control"
                          title="Product quantity"
                          value={product?.quantity ?? 1}
                          onChange={(e) =>
                            handleQuantityUpdate(
                              pIndex,
                              parseInt(e.target.value)
                            )
                          }
                        >
                          {getArrayFromTo(1, 12).map((quantity) => (
                            <option key={quantity} value={quantity}>
                              {quantity}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="text-center">
                        <Link
                          to=""
                          className="text-danger"
                          title="Remove product"
                          onClick={() => removeProduct(pIndex)}
                        >
                          <i className="fa fa-times"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="d-block d-sm-none">
              {(products ?? []).map((product, pIndex) => (
                <ProductMobileTile
                  product={product}
                  key={product.id}
                  onSizeChange={(sizeIndex) =>
                    handleSizeUpdate(pIndex, sizeIndex)
                  }
                  onQuantityChange={(quantity) =>
                    handleQuantityUpdate(pIndex, quantity)
                  }
                  onRemoveClicked={() => removeProduct(pIndex)}
                />
              ))}
            </div>
          </div>
          <div className="">
            <div className="holder">
              <h2>YOUR ORDER</h2>
              <div className="table-responsive">
                <Table>
                  <tbody>
                    <tr>
                      <td width="30%" className="fw-bold">
                        PACKAGING TYPE
                      </td>
                      <td width="70%" className="text-end">
                        {order.packaging.title} {isMobile && <br />} (Min qty:{" "}
                        {order.packaging.minQuantity} &nbsp;&nbsp; - &nbsp;
                        &nbsp;Max qty: {order.packaging.maxQuantity})
                      </td>
                    </tr>
                    <tr>
                      <td width="30%" className="fw-bold">
                        Products
                      </td>
                      <td width="70%" className="text-end">
                        <strong>Total: </strong>
                        {products?.length}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        {isMobile ? (
                          <>
                            {(products ?? []).map((product, pIndex) => (
                              <ProductMobileTile
                                product={product}
                                key={product.id}
                                isReadonly={true}
                                onSizeChange={(sizeIndex) =>
                                  handleSizeUpdate(pIndex, sizeIndex)
                                }
                                onQuantityChange={(quantity) =>
                                  handleQuantityUpdate(pIndex, quantity)
                                }
                                onRemoveClicked={() => removeProduct(pIndex)}
                              />
                            ))}
                          </>
                        ) : (
                          <Table>
                            <thead>
                              <tr>
                                <th>&nbsp;</th>
                                <th>Product</th>
                                <th className="text-center">Size</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-end">Unit price</th>
                                <th className="text-end">Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {(products ?? []).map((product) => (
                                <tr key={product.id}>
                                  <td width="10%" className="border-0">
                                    <img
                                      src={product?.featuredImage}
                                      alt={product?.title}
                                      className="thumbnail-50 remove-bg"
                                    />
                                  </td>
                                  <td
                                    width="50%"
                                    className="align-middle border-0"
                                  >
                                    <strong>{product?.title}</strong>
                                  </td>
                                  <td
                                    width="10%"
                                    className="text-center align-middle border-0"
                                  >
                                    {product?.size}
                                  </td>
                                  <td
                                    width="10%"
                                    className="text-center align-middle border-0"
                                  >
                                    {product?.quantity}
                                  </td>
                                  <td
                                    width="10%"
                                    className="text-end align-middle border-0"
                                  >
                                    {GBP_SYMBOL}&nbsp;
                                    {formatCurrency(
                                      parseFloat(
                                        product?.price ?? "0.0"
                                      ).toFixed(2)
                                    )}
                                  </td>
                                  <td
                                    width="10%"
                                    className="text-end align-middle border-0"
                                  >
                                    {GBP_SYMBOL}&nbsp;
                                    {formatCurrency(
                                      (
                                        product?.price * product?.quantity
                                      ).toFixed(2)
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Packaging charges</td>
                      <td className="text-end">
                        ({totalOrderQuantity} * {order?.packaging.cost}) =
                        &nbsp;
                        {GBP_SYMBOL}&nbsp;
                        {formatCurrency(shippingCharges.toFixed(2))}
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Order total</td>
                      <td className="text-end">
                        ({formatCurrency(shippingCharges.toFixed(2))} +{" "}
                        {formatCurrency(totalOrderValue.toFixed(2))}) = &nbsp;
                        {GBP_SYMBOL}&nbsp;
                        {formatCurrency(orderTotal.toFixed(2))}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="block-holder">
              <input
                type="checkbox"
                title="Terms and Conditions"
                checked={isTermsAgreed}
                onChange={(e) => setIsTermsAgreed(e.target.checked)}
              />{" "}
              I’ve read &amp; accept the{" "}
              <Link to="">terms &amp; conditions</Link>
            </div>
          </div>
        </Slider>
        <Row className="pt-3 pb-3">
          <Col xs="6">
            <button
              className="btn btn-type3 btn-wish"
              disabled={currentPageIndex <= 0}
              type="button"
              onClick={handleBack}
            >
              Back
            </button>
          </Col>
          <Col xs="6" className="text-end">
            <button
              className={`btn btn-type3 btn-wish ${isValid ? "" : "bg-light"}`}
              disabled={!isValid && currentPageIndex < PAGE_TITLES.length}
              type="button"
              onClick={handleNext}
            >
              Proceed
            </button>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default Cart;
