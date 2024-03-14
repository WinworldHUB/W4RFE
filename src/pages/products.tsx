import { FC, useEffect } from "react";
import { Product } from "../../awsApis";
import PageLayout from "../lib/components/page-layout";
import { Link } from "react-router-dom";
import { PageRoutes } from "../lib/constants";
import useApi from "../lib/hooks/useApi";
import { PRODUCTS_APIS } from "../lib/constants/api-constants";
import ProductTile from "../lib/components/product-tile";
import ProductTileLarge from "../lib/components/product-tile-large";

const Products: FC<PageProps> = (pageProps) => {
  const { data: products, getData: getProducts } = useApi<Product[]>();

  useEffect(() => {
    getProducts(PRODUCTS_APIS.GET_ALL_PRODUCTS_API);
  }, []);

  return (
    <PageLayout {...pageProps}>
      <section
        className="mt-contact-banner style4"
        // style="background-image: url(images/img11.jpg);"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1>PRODUCTS</h1>
              <nav className="breadcrumbs">
                <ul className="list-unstyled">
                  <li>
                    <Link to={PageRoutes.Home}>
                      Home <i className="fa fa-angle-right"></i>
                    </Link>
                  </li>
                  <li>Products</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <aside
            id="sidebar"
            className="col-xs-12 col-sm-4 col-md-3 wow fadeInLeft"
            data-wow-delay="0.4s"
          >
            <section className="shop-widget filter-widget bg-grey">
              <h2>FILTER</h2>
              <span className="sub-title">Filter by Brands</span>
              <ul className="list-unstyled nice-form">
                <li>
                  <label htmlFor="check-1">
                    <input id="check-1" type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">Casali</span>
                  </label>
                  <span className="num">2</span>
                </li>
                <li>
                  <label htmlFor="check-2">
                    <input id="check-2" type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">Decar</span>
                  </label>
                  <span className="num">12</span>
                </li>
                <li>
                  <label htmlFor="check-3">
                    <input id="check-3" checked type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">Fantini</span>
                  </label>
                  <span className="num">4</span>
                </li>
                <li>
                  <label htmlFor="check-4">
                    <input id="check-4" type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">Flamentstyle</span>
                  </label>
                  <span className="num">4</span>
                </li>
                <li>
                  <label htmlFor="check-5">
                    <input id="check-5" type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">Heerenhuis</span>
                  </label>
                  <span className="num">6</span>
                </li>
                <li>
                  <label htmlFor="check-6">
                    <input id="check-6" type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">Hoffmann</span>
                  </label>
                  <span className="num">10</span>
                </li>
                <li>
                  <label htmlFor="check-7">
                    <input id="check-7" type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">Italfloor</span>
                  </label>
                  <span className="num">3</span>
                </li>
              </ul>
              <span className="sub-title">Filter by Price</span>
              <div className="price-range">
                <div className="range-slider">
                  <span className="dot"></span>
                  <span className="dot dot2"></span>
                </div>
                <span className="price">
                  Price &nbsp; $ 10 &nbsp; - &nbsp; $ 599
                </span>
                <a href="#" className="filter-btn">
                  Filter
                </a>
              </div>
            </section>
            <section className="shop-widget">
              <h2>CATEGORIES</h2>
              <ul className="list-unstyled category-list">
                <li>
                  <a href="#">
                    <span className="name">CHAIRS</span>
                    <span className="num">12</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="name">SOFAS</span>
                    <span className="num">24</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="name">ARMCHAIRS</span>
                    <span className="num">9</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="name">BEDROOM</span>
                    <span className="num">2</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="name">LIGHTING</span>
                    <span className="num">17</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="name">KITCHEN</span>
                    <span className="num">10</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="name">ACCESSORIES</span>
                    <span className="num">23</span>
                  </a>
                </li>
              </ul>
            </section>
            <section className="shop-widget">
              <h2>HOT SALE</h2>
              <div className="mt-product4 mt-paddingbottom20">
                <div className="img">
                  <a href="product-detail.html">
                    <img
                      src="images/products/img14.jpg"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="text">
                  <div className="frame">
                    <strong>
                      <a href="product-detail.html">Egon Wooden Chair</a>
                    </strong>
                    <ul className="mt-stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-o"></i>
                      </li>
                    </ul>
                  </div>
                  <del className="off">$75,00</del>
                  <span className="price">$55,00</span>
                </div>
              </div>
              <div className="mt-product4 mt-paddingbottom20">
                <div className="img">
                  <a href="product-detail.html">
                    <img
                      src="images/products/img15.jpg"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="text">
                  <div className="frame">
                    <strong>
                      <a href="product-detail.html">Oyo Cantilever Chair</a>
                    </strong>
                  </div>
                  <del className="off">$75,00</del>
                  <span className="price">$55,00</span>
                </div>
              </div>
              <div className="mt-product4 mt-paddingbottom20">
                <div className="img">
                  <a href="product-detail.html">
                    <img
                      src="images/products/img16.jpg"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="text">
                  <div className="frame">
                    <strong>
                      <a href="product-detail.html">Kurve Chair</a>
                    </strong>
                    <ul className="mt-stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-o"></i>
                      </li>
                    </ul>
                  </div>
                  <del className="off">$75,00</del>
                  <span className="price">$55,00</span>
                </div>
              </div>
              <div className="mt-product4 mt-paddingbottom20">
                <div className="img">
                  <a href="product-detail.html">
                    <img
                      src="images/products/img20.jpg"
                      alt="image description"
                    />
                  </a>
                </div>
                <div className="text">
                  <div className="frame">
                    <strong>
                      <a href="product-detail.html">Marvelous Wooden Chair</a>
                    </strong>
                  </div>
                  <del className="off">$75,00</del>
                  <span className="price">$55,00</span>
                </div>
              </div>
            </section>
          </aside>
          <div
            className="col-xs-12 col-sm-8 col-md-9 wow fadeInRight"
            data-wow-delay="0.4s"
          >
            <header className="mt-shoplist-header">
              <div className="btn-box">
                <ul className="list-inline">
                  <li>
                    <a href="#" className="drop-link">
                      Default Sorting{" "}
                      <i aria-hidden="true" className="fa fa-angle-down"></i>
                    </a>
                    <div className="drop">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">ASC</a>
                        </li>
                        <li>
                          <a href="#">DSC</a>
                        </li>
                        <li>
                          <a href="#">Price</a>
                        </li>
                        <li>
                          <a href="#">Relevance</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a className="mt-viewswitcher" href="#">
                      <i className="fa fa-th-large" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a className="mt-viewswitcher" href="#">
                      <i className="fa fa-th-list" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-textbox">
                <p>
                  Showing <strong>1–9</strong> of <strong>65</strong> results
                </p>
                <p>
                  View <a href="#">9</a> / <a href="#">18</a> /{" "}
                  <a href="#">27</a> / <a href="#">All</a>
                </p>
              </div>
            </header>
            <ul className="mt-productlisthold list-inline">
              {(products ?? []).map((product) => (
                <li>
                  <ProductTileLarge
                    product={product}
                    onAddToCartClick={() => {}}
                    onViewClick={() => {}}
                  />
                </li>
              ))}
              <li>
                <div className="mt-product1 large">
                  <div className="box">
                    <div className="b1">
                      <div className="b2">
                        <a href="product-detail.html">
                          <img
                            src="images/products/img22.jpg"
                            alt="image description"
                          />
                        </a>
                        <ul className="mt-stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="links">
                          <li>
                            <a href="#">
                              <i className="icon-handbag"></i>
                              <span>Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-heart-empty"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-exchange"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="txt">
                    <strong className="title">
                      <a href="product-detail.html">Bombi Chair</a>
                    </strong>
                    <span className="price">
                      <i className="fa fa-eur"></i> <span>399,00</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="mt-product1 large">
                  <div className="box">
                    <div className="b1">
                      <div className="b2">
                        <a href="product-detail.html">
                          <img
                            src="images/products/img23.jpg"
                            alt="image description"
                          />
                        </a>
                        <ul className="links">
                          <li>
                            <a href="#">
                              <i className="icon-handbag"></i>
                              <span>Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-heart-empty"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-exchange"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="txt">
                    <strong className="title">
                      <a href="product-detail.html">
                        Marvelous Modern 3 Seater
                      </a>
                    </strong>
                    <span className="price">
                      <i className="fa fa-eur"></i> <span>599,00</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="mt-product1 large">
                  <div className="box">
                    <div className="b1">
                      <div className="b2">
                        <a href="product-detail.html">
                          <img
                            src="images/products/img24.jpg"
                            alt="image description"
                          />
                        </a>
                        <span className="caption">
                          <span className="off">15% Off</span>
                        </span>
                        <ul className="links">
                          <li>
                            <a href="#">
                              <i className="icon-handbag"></i>
                              <span>Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-heart-empty"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-exchange"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="txt">
                    <strong className="title">
                      <a href="product-detail.html">Chair with armrests</a>
                    </strong>
                    <span className="price">
                      <i className="fa fa-eur"></i> <span>200,00</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="mt-product1 large">
                  <div className="box">
                    <div className="b1">
                      <div className="b2">
                        <a href="product-detail.html">
                          <img
                            src="images/products/img67.jpg"
                            alt="image description"
                          />
                        </a>
                        <ul className="mt-stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="links">
                          <li>
                            <a href="#">
                              <i className="icon-handbag"></i>
                              <span>Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-heart-empty"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-exchange"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="txt">
                    <strong className="title">
                      <a href="product-detail.html">Pouf Chair</a>
                    </strong>
                    <span className="price">
                      <i className="fa fa-eur"></i> <span>399,00</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="mt-product1 large">
                  <div className="box">
                    <div className="b1">
                      <div className="b2">
                        <a href="product-detail.html">
                          <img
                            src="images/products/img68.jpg"
                            alt="image description"
                          />
                        </a>
                        <ul className="mt-stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="links">
                          <li>
                            <a href="#">
                              <i className="icon-handbag"></i>
                              <span>Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-heart-empty"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-exchange"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="txt">
                    <strong className="title">
                      <a href="product-detail.html">Jalis Counter stool</a>
                    </strong>
                    <span className="price">
                      <i className="fa fa-eur"></i> <span>269,00</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="mt-product1 large">
                  <div className="box">
                    <div className="b1">
                      <div className="b2">
                        <a href="product-detail.html">
                          <img
                            src="images/products/img24.jpg"
                            alt="image description"
                          />
                        </a>
                        <ul className="mt-stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="links">
                          <li>
                            <a href="#">
                              <i className="icon-handbag"></i>
                              <span>Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-heart-empty"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-exchange"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="txt">
                    <strong className="title">
                      <a href="product-detail.html">Bombi Chair</a>
                    </strong>
                    <span className="price">
                      <i className="fa fa-eur"></i> <span>399,00</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="mt-product1 large">
                  <div className="box">
                    <div className="b1">
                      <div className="b2">
                        <a href="product-detail.html">
                          <img
                            src="images/products/img69.jpg"
                            alt="image description"
                          />
                        </a>
                        <ul className="mt-stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="links">
                          <li>
                            <a href="#">
                              <i className="icon-handbag"></i>
                              <span>Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-heart-empty"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-exchange"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="txt">
                    <strong className="title">
                      <a href="product-detail.html">Lucky Chair</a>
                    </strong>
                    <span className="price">
                      <i className="fa fa-eur"></i> <span>399,00</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="mt-product1 large">
                  <div className="box">
                    <div className="b1">
                      <div className="b2">
                        <a href="product-detail.html">
                          <img
                            src="images/products/img70.jpg"
                            alt="image description"
                          />
                        </a>
                        <ul className="mt-stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="links">
                          <li>
                            <a href="#">
                              <i className="icon-handbag"></i>
                              <span>Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-heart-empty"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-exchange"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="txt">
                    <strong className="title">
                      <a href="product-detail.html">
                        Cut Chair with 4 Spoke Base
                      </a>
                    </strong>
                    <span className="price">
                      <i className="fa fa-eur"></i> <span>269,00</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="mt-product1 large">
                  <div className="box">
                    <div className="b1">
                      <div className="b2">
                        <a href="product-detail.html">
                          <img
                            src="images/products/img71.jpg"
                            alt="image description"
                          />
                        </a>
                        <ul className="mt-stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="links">
                          <li>
                            <a href="#">
                              <i className="icon-handbag"></i>
                              <span>Add to Cart</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-heart-empty"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icomoon icon-exchange"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="txt">
                    <strong className="title">
                      <a href="product-detail.html">Yard SeChair</a>
                    </strong>
                    <span className="price">
                      <i className="fa fa-eur"></i> <span>139,00</span>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <nav className="mt-pagination">
              <ul className="list-inline">
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Products;
