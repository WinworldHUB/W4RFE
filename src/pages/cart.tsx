import { FC, useContext, useEffect, useMemo, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import { Link, useNavigate } from "react-router-dom";
import {
  DEFAULT_PACKAGES,
  EMPTY_DELIVERY_DETAILS,
  EMPTY_STRING,
  PageRoutes,
} from "../lib/constants";
import Slider from "../lib/components/slider";
import { Order, PackagingType, Product } from "../lib/awsApis";
import useOrder from "../lib/hooks/useOrder";
import useApi from "../lib/hooks/useApi";
import { ORDERS_APIS } from "../lib/constants/api-constants";
import { CartContext } from "../lib/contexts/cart-context";
import { getArrayFromTo } from "../lib/utils/array-utils";
import { AppContext } from "../lib/contexts/app-context";
import { isDeliveryDetailsValid } from "../lib/utils/order-utils";

const PAGE_TITLES = [
  {
    id: "01",
    title: "Order Pre-requisites",
  },
  {
    id: "02",
    title: "Products",
  },
  {
    id: "03",
    title: "Review",
  },
] as PageTitleItem[];

const Cart: FC<PageProps> = (pageProps) => {
  const { data: orders, getData: getOrders } = useApi<Order[]>();
  const { order, setOrder } = useOrder(orders?.length);
  const { products, removeProduct, updateProduct } = useContext(CartContext);
  const navigateTo = useNavigate();
  const { appState } = useContext(AppContext);

  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [deliveryDetails, setDeliveryDetails] = useState<OrderDeliveryDetails>(
    EMPTY_DELIVERY_DETAILS
  );

  useEffect(() => {
    if (appState?.member) {
      setDeliveryDetails({
        ...deliveryDetails,
        memberName: appState.member["name"] ?? EMPTY_STRING,
        memberEmail: appState.member["email"] ?? EMPTY_STRING,
        memberPhone: appState.member["phone"] ?? EMPTY_STRING,
        deliverTo: appState.member["name"] ?? EMPTY_STRING,
      });
    }
  }, [appState?.member]);

  if (products?.length === 0) {
    alert("Please add some products to cart to continue.");
    navigateTo(PageRoutes.Home);
  }

  useEffect(() => {
    getOrders(ORDERS_APIS.GET_ALL_ORDERS_API);
  }, []);

  useEffect(() => {
    console.log(order);
  }, [order]);

  useEffect(() => {
    if (order) {
      setOrder({
        ...order,
        products: products,
        deliveryDetails: JSON.stringify(deliveryDetails),
      });
    }
  }, [products, deliveryDetails]);

  const isValid = useMemo(() => {
    switch (currentPageIndex) {
      case 0:
        return isDeliveryDetailsValid(JSON.stringify(deliveryDetails));

      case 1:
        break;

      case 2:
        break;

      default:
        return false;
    }
    return false;
  }, [currentPageIndex, order]);

  const handleSizeUpdate = (productIndex: number, selectedSize: string) => {
    const updatedProduct = products[productIndex] as Product;
    updatedProduct.size = selectedSize;
    console.log(updatedProduct);
    updateProduct(updatedProduct, productIndex);
  };

  const handleQauantityUpdate = (
    productIndex: number,
    selectedQuantity: number
  ) => {
    const updatedProduct = products[productIndex] as Product;
    updatedProduct.quantity = selectedQuantity;
    updateProduct(updatedProduct, productIndex);
  };

  const handlePackageUpdate = (selectedPackaging: Packaging) => {
    setOrder({
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

  return (
    <PageLayout {...pageProps}>
      <section className="mt-contact-banner style4">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1>CART</h1>
              <nav className="breadcrumbs">
                <ul className="list-unstyled">
                  <li>
                    <Link to={PageRoutes.Home}>
                      Home <i className="fa fa-angle-right"></i>
                    </Link>
                  </li>
                  <li>Cart</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
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
      <section className="mt-detail-sec toppadding-zero">
        <div className="container">
          <div className="row bill-detail w-100p">
            <Slider
              slideTo={currentPageIndex}
              slidesPerView={1}
              autoHeight={true}
            >
              <div className="col-xs-12">
                <form action="#" className="bill-detail w-100p">
                  <h2>{PAGE_TITLES[currentPageIndex].title}</h2>
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
                          <option
                            value={packageType.id}
                            key={packageType.title}
                          >
                            {packageType.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="row p-2 bg-light rounded">
                      <div className="col-xs-3 col-md-2">
                        Package description:
                      </div>
                      <div className="col-xs-9 col-md-10">
                        {order?.packaging?.description}
                      </div>
                      <div className="col-xs-3 col-md-2">Minimum quantity:</div>
                      <div className="col-xs-9 col-md-10">
                        {order?.packaging?.minQuantity}
                      </div>
                      <div className="col-xs-3 col-md-2">Maximum quantity:</div>
                      <div className="col-xs-9 col-md-10">
                        {order?.packaging?.maxQuantity}
                      </div>
                    </div>
                    <br />
                    <div className="form-group">
                      <div className="col">
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
                      <div className="col">
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
                    </div>
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
              </div>
              <div className="col-xs-12">
                <h2>{PAGE_TITLES[currentPageIndex].title}</h2>
                <div className="mt-product-table">
                  <div className="container">
                    <table className="table">
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
                              ? (JSON.parse(
                                  product.variants
                                ) as ProductVariant[])
                              : (product?.variants as ProductVariant[]);
                          return (
                            <tr key={product?.id}>
                              <td className="cell">
                                <img
                                  className="thumbnail-50"
                                  src={product?.featuredImage}
                                  alt={product?.title}
                                />
                              </td>
                              <td className="cell w-50">{product?.title}</td>
                              <td className="cell">
                                <select
                                  className="form-control"
                                  title="Product size"
                                  onChange={(e) =>
                                    handleSizeUpdate(pIndex, e.target.value)
                                  }
                                >
                                  {(productVariants ?? []).map((variant) => (
                                    <option value={variant.size}>
                                      {variant.size}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <td className="cell">
                                <select
                                  className="form-control"
                                  title="Product quantity"
                                  onChange={(e) =>
                                    handleQauantityUpdate(
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
                              <td className="cell">
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
                  </div>
                </div>
              </div>
            </Slider>
            <div className="col-xs-12 d-in-flex">
              <button
                className="update-btn"
                disabled={currentPageIndex <= 0}
                type="button"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className={`process-btn ${isValid ? "" : "bg-light"}`}
                disabled={!isValid && currentPageIndex < PAGE_TITLES.length}
                type="button"
                onClick={handleNext}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Cart;
