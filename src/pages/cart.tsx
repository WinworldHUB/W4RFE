import { FC, useContext, useEffect, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import { Link, useNavigate } from "react-router-dom";
import { DEFAULT_PACKAGES, PageRoutes } from "../lib/constants";
import Slider from "../lib/components/slider";
import { Order, PackagingType, Product } from "../lib/awsApis";
import useOrder from "../lib/hooks/useOrder";
import useApi from "../lib/hooks/useApi";
import { ORDERS_APIS } from "../lib/constants/api-constants";
import { CartContext } from "../lib/contexts/cart-context";
import { getArrayFromTo } from "../lib/utils/array-utils";

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
    title: "Product quantities",
  },
  {
    id: "04",
    title: "Review",
  },
] as PageTitleItem[];

const Cart: FC<PageProps> = (pageProps) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const { data: orders, getData: getOrders } = useApi<Order[]>();
  const { order, setOrder } = useOrder(orders?.length);
  const { products, removeProduct, updateProduct } = useContext(CartContext);
  const navigateTo = useNavigate();

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
      order.products = products;
    }
  }, [products]);

  const handleSizeUpdate = (productIndex: number, selectedSize: string) => {
    const updatedProduct = products[productIndex] as Product;
    updatedProduct.size = selectedSize;
    updateProduct(updateProduct, productIndex);
  };
  const handleQauantityUpdate = (
    productIndex: number,
    selectedQuantity: number
  ) => {
    const updatedProduct = products[productIndex] as Product;
    updatedProduct.quantity = selectedQuantity;
    updateProduct(updateProduct, productIndex);
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
                    key={`${item.title}`}
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
          <div className="row">
            <div className="col-xs-12">
              <h2>{PAGE_TITLES[currentPageIndex].title}</h2>
              <div className="mt-product-table" style={{ overflow: "auto" }}>
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
                        const productVariants = JSON.parse(
                          product.variants
                        ) as ProductVariant[];
                        return (
                          <tr key={product.id}>
                            <td className="cell">
                              <img
                                className="thumbnail-50"
                                src={product.featuredImage}
                                alt={product.title}
                              />
                            </td>
                            <td className="cell w-50">{product.title}</td>
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
              {/* <Slider slideTo={currentPageIndex}>
                <form action="#" className="bill-detail">
                  <fieldset>
                    <div className="form-group">
                      <select
                        className="form-control"
                        title="Package Type"
                        onChange={(e) => {
                          console.log(e.target.selectedIndex);
                          setOrder({
                            ...order,
                            packagingType: PackagingType[e.target.value],
                            packaging: DEFAULT_PACKAGES[e.target.selectedIndex],
                          });
                        }}
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
                    <div
                      className="mt-product-table"
                      style={{ overflow: "auto" }}
                    >
                      <div className="container">
                        <div className="row border">
                          <div className="col-xs-12 col-sm-6">
                            <strong className="title">PRODUCT</strong>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <strong className="title">PRICE</strong>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <strong className="title">QUANTITY</strong>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <strong className="title">TOTAL</strong>
                          </div>
                        </div>
                        <div className="row border">
                          <div className="col-xs-12 col-sm-2">
                            <div className="img-holder">
                              <img
                                src="/assets/images/img40.jpg"
                                alt="image description"
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-4">
                            <strong className="product-name">
                              Marvelous Modern 3 Seater
                            </strong>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <strong className="price">
                              <i className="fa fa-eur"></i> 599,00
                            </strong>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <form action="#" className="qyt-form">
                              <fieldset>
                                <select title="s3">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                </select>
                              </fieldset>
                            </form>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <strong className="price">
                              <i className="fa fa-eur"></i> 599,00
                            </strong>
                            <a href="#">
                              <i className="fa fa-close"></i>
                            </a>
                          </div>
                        </div>
                        <div className="row border">
                          <div className="col-xs-12 col-sm-2">
                            <div className="img-holder">
                              <img
                                src="images/img41.jpg"
                                alt="image description"
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-4">
                            <strong className="product-name">
                              Marvelous Modern 3 Seater
                            </strong>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <strong className="price">
                              <i className="fa fa-eur"></i> 599,00
                            </strong>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <form action="#" className="qyt-form">
                              <fieldset>
                                <select title="s">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                </select>
                              </fieldset>
                            </form>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <strong className="price">
                              <i className="fa fa-eur"></i> 599,00
                            </strong>
                            <a href="#">
                              <i className="fa fa-close"></i>
                            </a>
                          </div>
                        </div>
                        <div className="row border">
                          <div className="col-xs-12 col-sm-2">
                            <div className="img-holder">
                              <img
                                src="images/img42.jpg"
                                alt="image description"
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-4">
                            <strong className="product-name">
                              Marvelous Modern 3 Seater
                            </strong>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <strong className="price">
                              <i className="fa fa-eur"></i> 599,00
                            </strong>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <form action="#" className="qyt-form">
                              <fieldset>
                                <select title="s1">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                </select>
                              </fieldset>
                            </form>
                          </div>
                          <div className="col-xs-12 col-sm-2">
                            <strong className="price">
                              <i className="fa fa-eur"></i> 599,00
                            </strong>
                            <a href="#">
                              <i className="fa fa-close"></i>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12">
                            <form action="#" className="coupon-form">
                              <fieldset>
                                <div className="mt-holder">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Coupon Code"
                                  />
                                  <button type="submit">APPLY</button>
                                </div>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Address"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Town / City"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State / Country"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode / Zip"
                      />
                    </div>
                    <div className="form-group">
                      <div className="col">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" title="s" /> Ship to a different
                      address?
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Order Notes"
                      ></textarea>
                    </div>
                  </fieldset>
                </form>
              </Slider> */}
            </div>
            {/* <div className="col-xs-12 col-sm-6">
              <div className="holder">
                <h2>YOUR ORDER</h2>
                <ul className="list-unstyled block">
                  <li>
                    <div className="txt-holder">
                      <div className="text-wrap pull-left">
                        <strong className="title">Package Type</strong>
                      </div>
                      <div className="text-wrap txt text-right pull-right">
                        <strong className="title">
                          {order.packaging?.title}
                        </strong>
                      </div>
                      <div className="text-wrap txt  pull-right">
                        <p>{order.packaging?.description}</p>
                        <p>
                          Minimum Quantity:{" "}
                          <strong>{order.packaging?.minQuantity}</strong> |
                          Maximum Quantity:{" "}
                          <strong>{order.packaging?.maxQuantity}</strong>
                        </p>
                      </div>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div className="txt-holder">
                      <div className="text-wrap pull-left">
                        <strong className="title">PRODUCTS</strong>
                        <span>Marvelous Modern 3 Seater x1</span>
                        <span>Bombi Chair x1</span>
                      </div>
                      <div className="text-wrap txt text-right pull-right">
                        <strong className="title">TOTALS</strong>
                        <span>
                          <i className="fa fa-eur"></i> 299,00
                        </span>
                        <span>
                          <i className="fa fa-eur"></i> 532,00
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="txt-holder">
                      <strong className="title sub-title pull-left">
                        CART SUBTOTAL
                      </strong>
                      <div className="txt pull-right">
                        <span>
                          <i className="fa fa-eur"></i> 532,00
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="txt-holder">
                      <strong className="title sub-title pull-left">
                        SHIPPING
                      </strong>
                      <div className="txt pull-right">
                        <span>Free Shipping</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="txt-holder">
                      <strong className="title sub-title pull-left">
                        ORDER TOTAL
                      </strong>
                      <div className="txt pull-right">
                        <span>
                          <i className="fa fa-eur"></i> 1299,00
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="block-holder">
                <input type="checkbox" checked title="s" /> I’ve read &amp;
                accept the <a href="#">terms &amp; conditions</a>
              </div>
              <a href="#" className="process-btn">
                PROCEED TO CHECKOUT <i className="fa fa-check"></i>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Cart;
