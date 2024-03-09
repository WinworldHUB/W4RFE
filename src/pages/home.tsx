import { FC } from "react";
import PageLayout from "../lib/components/page-layout";
import Slider from "../lib/components/slider";

const Home: FC<PageProps> = (pageProps) => {
  return (
    <PageLayout menuItems={[]} selectedMenuId={0}>
      <div className="mt-side-menu">
        <div className="mt-holder">
          <a href="#" className="side-close">
            <span></span>
            <span></span>
          </a>
          <strong className="mt-side-title">MY ACCOUNT</strong>
          <div className="mt-side-widget">
            <header>
              <span className="mt-side-subtitle">SIGN IN</span>
              <p>Welcome back! Sign in to Your Account</p>
            </header>
            <form action="#">
              <fieldset>
                <input
                  type="text"
                  placeholder="Username or email address"
                  className="input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                />
                <div className="box">
                  <span className="left">
                    <input className="checkbox" type="checkbox" id="check1" />
                    <label htmlFor="check1">Remember Me</label>
                  </span>
                  <a href="#" className="help">
                    Help?
                  </a>
                </div>
                <button type="submit" className="btn-type1">
                  Login
                </button>
              </fieldset>
            </form>
          </div>
          <div className="or-divider">
            <span className="txt">or</span>
          </div>
          <div className="mt-side-widget">
            <header>
              <span className="mt-side-subtitle">CREATE NEW ACCOUNT</span>
              <p>Create your very own account</p>
            </header>
            <form action="#">
              <fieldset>
                <input
                  type="text"
                  placeholder="Username or email address"
                  className="input"
                />
                <button type="submit" className="btn-type1">
                  Register
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-search-popup">
        <div className="mt-holder">
          <a href="#" className="search-close">
            <span></span>
            <span></span>
          </a>
          <div className="mt-frame">
            <form action="#">
              <fieldset>
                <input type="text" placeholder="Search..." />
                <span className="icon-microphone"></span>
                <button
                  title="submit"
                  className="icon-magnifier"
                  type="submit"
                ></button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-main-slider">
        <Slider slideTo={0} className="slider banner-slider">
          <div
            className="holder text-center"
            style={{ backgroundImage: "url(/assets/images/sliders/img04.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="text centerize">
                    <strong className="title">FURNITURE DESIGNS IDEAS</strong>
                    <h1>LIGHTING</h1>
                    <h2>PENDANT LAMPS</h2>
                    <div className="txt">
                      <p>
                        Consectetur adipisicing elit. Beatae accusamus, optio,
                        repellendus inventore
                      </p>
                    </div>
                    <a href="product-detail.html" className="shop">
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="holder text-center"
            style={{ backgroundImage: "url(/assets/images/sliders/img05.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="text right">
                    <strong className="title">FURNITURE DESIGNS IDEAS</strong>
                    <h1>LOUNGE CHAIRS</h1>
                    <h2>SW DAYBED</h2>
                    <div className="txt">
                      <p>
                        Consectetur adipisicing elit. Beatae accusamus, optio,
                        repellendus inventore
                      </p>
                    </div>
                    <a href="product-detail.html" className="shop">
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="holder text-center"
            style={{ backgroundImage: "url(/assets/images/sliders/img06.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="text">
                    <strong className="title">FURNITURE DESIGNS IDEAS</strong>
                    <h1>CARDBOARD</h1>
                    <h2> Sofas and Armchairs</h2>
                    <div className="txt">
                      <p>
                        Consectetur adipisicing elit. Beatae accusamus, optio,
                        repellendus inventore
                      </p>
                    </div>
                    <a href="product-detail.html" className="shop">
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <main id="mt-main">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="banner-frame">
                <div className="banner-1 wow fadeInLeft" data-wow-delay="0.4s">
                  <img
                    alt="image description"
                    src="/assets/images/banner/img01.jpg"
                  />
                  <div className="holder">
                    <h2>
                      MY SMALL WRITING <br />
                      DESK
                    </h2>
                    <div className="txts">
                      <a className="btn-shop" href="product-detail.html">
                        <span>shop now</span>
                        <i className="fa fa-angle-right"></i>
                      </a>
                      <div className="discount">
                        <span>-20%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-box first">
                  <div className="banner-2 wow fadeInUp" data-wow-delay="0.4s">
                    <img
                      alt="image description"
                      src="/assets/images/banner/img02.jpg"
                    />
                    <div className="holder">
                      <h2>
                        MODULAR LOUNGE <br />
                        TEAK
                      </h2>
                      <span className="price">$ 129.00</span>
                    </div>
                  </div>
                  <div
                    className="banner-3 right wow fadeInDown"
                    data-wow-delay="0.4s"
                  >
                    <img
                      alt="image description"
                      src="/assets/images/banner/img03.jpg"
                    />
                    <div className="holder">
                      <h2>
                        Modular technical <br />
                        fabric sofa
                      </h2>
                      <a href="product-detail.html" className="shop">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="banner-4 hidden-sm wow fadeInRight"
                  data-wow-delay="0.4s"
                >
                  <img
                    alt="image description"
                    src="/assets/images/banner/img04.jpg"
                  />
                  <div className="holder">
                    <h2>
                      Direct light <br />
                      pendant lamp
                    </h2>
                    <span className="price">$ 129.00</span>
                    <a className="btn-shop add" href="product-detail.html">
                      <span>shop now</span>
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="mt-producttabs wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <ul className="producttabs">
                  <li>
                    <a href="#tab1" className="active">
                      FEATURED
                    </a>
                  </li>
                  <li>
                    <a href="#tab2">LATEST</a>
                  </li>
                  <li>
                    <a href="#tab3">BEST SELLER</a>
                  </li>
                </ul>
                <div className="tab-content text-center">
                  <div id="tab1">
                    <div className="tabs-slider">
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img01.jpg"
                                    alt="image description"
                                  />
                                </a>
                                <span className="caption">
                                  <span className="new">NEW</span>
                                </span>
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">Puff Chair</a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>287,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img06.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Easy chair with armrests
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>287,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img02.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img07.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Upholstered chair
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>399,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img03.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">Wood Chair</a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>198,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img08.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Trestle-based chair
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>198,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img04.jpg"
                                    alt="image description"
                                  />
                                </a>
                                <span className="caption">
                                  <span className="off">15% Off</span>
                                  <span className="new">NEW</span>
                                </span>
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img09.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img05.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img10.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img02.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img07.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Upholstered chair
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>399,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab2">
                    <div className="tabs-slider">
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img06.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Easy chair with armrests
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>287,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img01.jpg"
                                    alt="image description"
                                  />
                                </a>
                                <span className="caption">
                                  <span className="new">NEW</span>
                                </span>
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">Puff Chair</a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>287,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img07.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Upholstered chair
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>399,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img02.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img08.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Trestle-based chair
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>198,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img03.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">Wood Chair</a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>198,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img09.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img04.jpg"
                                    alt="image description"
                                  />
                                </a>
                                <span className="caption">
                                  <span className="off">15% Off</span>
                                  <span className="new">NEW</span>
                                </span>
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img10.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img05.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img07.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Upholstered chair
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>399,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img02.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                      </div>
                    </div>
                  </div>
                  <div id="tab3">
                    <div className="tabs-slider">
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img01.jpg"
                                    alt="image description"
                                  />
                                </a>
                                <span className="caption">
                                  <span className="new">NEW</span>
                                </span>
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">Puff Chair</a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>287,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img06.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Easy chair with armrests
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>287,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img07.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Upholstered chair
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>399,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img02.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img03.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">Wood Chair</a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>198,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img08.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Trestle-based chair
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>198,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img09.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img04.jpg"
                                    alt="image description"
                                  />
                                </a>
                                <span className="caption">
                                  <span className="off">15% Off</span>
                                  <span className="new">NEW</span>
                                </span>
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img05.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img10.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                              <i className="fa fa-eur"></i> <span>200,00</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img07.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="txt">
                            <strong className="title">
                              <a href="product-detail.html">
                                Upholstered chair
                              </a>
                            </strong>
                            <span className="price">
                              <i className="fa fa-eur"></i> <span>399,00</span>
                            </span>
                          </div>
                        </div>
                        <div className="mt-product1 mt-paddingbottom20">
                          <div className="box">
                            <div className="b1">
                              <div className="b2">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/img02.jpg"
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
                                    <a href="#popup1" className="lightbox">
                                      <i className="icomoon icon-eye"></i>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-bestseller bg-grey text-center wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 mt-heading text-uppercase">
                <h2 className="heading">BEST SELLER</h2>
                <p>EXCEPTEUR SINT OCCAECAT</p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="bestseller-slider">
                  <div className="slide">
                    <div className="mt-product1 large">
                      <div className="box">
                        <div className="b1">
                          <div className="b2">
                            <a href="product-detail.html">
                              <img
                                src="/assets/images/products/img11.jpg"
                                alt="image description"
                              />
                            </a>
                            <span className="caption">
                              <span className="best-price">Best Price</span>
                            </span>
                            <ul className="links add">
                              <li>
                                <a href="#">
                                  <i className="icon-handbag"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icomoon icon-heart-empty"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#popup1" className="lightbox">
                                  <i className="icomoon icon-eye"></i>
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
                  </div>
                  <div className="slide">
                    <div className="mt-product1 large">
                      <div className="box">
                        <div className="b1">
                          <div className="b2">
                            <a href="product-detail.html">
                              <img
                                src="/assets/images/products/img12.jpg"
                                alt="image description"
                              />
                            </a>
                            <ul className="links add">
                              <li>
                                <a href="#">
                                  <i className="icon-handbag"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icomoon icon-heart-empty"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#popup1" className="lightbox">
                                  <i className="icomoon icon-eye"></i>
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
                  </div>
                  <div className="slide">
                    <div className="mt-product1 large">
                      <div className="box">
                        <div className="b1">
                          <div className="b2">
                            <a href="product-detail.html">
                              <img
                                src="/assets/images/products/img13.jpg"
                                alt="image description"
                              />
                            </a>
                            <ul className="links add">
                              <li>
                                <a href="#">
                                  <i className="icon-handbag"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icomoon icon-heart-empty"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#popup1" className="lightbox">
                                  <i className="icomoon icon-eye"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="txt">
                        <strong className="title">
                          <a href="product-detail.html">Puff Armchair</a>
                        </strong>
                        <span className="price">
                          <i className="fa fa-eur"></i> <span>200,00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="mt-product1 large">
                      <div className="box">
                        <div className="b1">
                          <div className="b2">
                            <a href="product-detail.html">
                              <img
                                src="/assets/images/products/img11.jpg"
                                alt="image description"
                              />
                            </a>
                            <span className="caption">
                              <span className="best-price">Best Price</span>
                            </span>
                            <ul className="links add">
                              <li>
                                <a href="#">
                                  <i className="icon-handbag"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icomoon icon-heart-empty"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#popup1" className="lightbox">
                                  <i className="icomoon icon-eye"></i>
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
                  </div>
                  <div className="slide">
                    <div className="mt-product1 large">
                      <div className="box">
                        <div className="b1">
                          <div className="b2">
                            <a href="product-detail.html">
                              <img
                                src="/assets/images/products/img12.jpg"
                                alt="image description"
                              />
                            </a>
                            <ul className="links add">
                              <li>
                                <a href="#">
                                  <i className="icon-handbag"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icomoon icon-heart-empty"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#popup1" className="lightbox">
                                  <i className="icomoon icon-eye"></i>
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
                  </div>
                  <div className="slide">
                    <div className="mt-product1 large">
                      <div className="box">
                        <div className="b1">
                          <div className="b2">
                            <a href="product-detail.html">
                              <img
                                src="/assets/images/products/img13.jpg"
                                alt="image description"
                              />
                            </a>
                            <span className="caption">
                              <span className="off">15% Off</span>
                            </span>
                            <ul className="links add">
                              <li>
                                <a href="#">
                                  <i className="icon-handbag"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icomoon icon-heart-empty"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#popup1" className="lightbox">
                                  <i className="icomoon icon-eye"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="txt">
                        <strong className="title">
                          <a href="product-detail.html">Puff Armchair</a>
                        </strong>
                        <span className="price">
                          <i className="fa fa-eur"></i> <span>200,00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-smallproducts">
          <div className="container">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomsm wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                <h3 className="heading">Hot Sale</h3>
                <div className="mt-product4 mt-paddingbottom20">
                  <div className="img">
                    <a href="product-detail.html">
                      <img
                        alt="image description"
                        src="/assets/images/products/img14.jpg"
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
                        alt="image description"
                        src="/assets/images/products/img15.jpg"
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
                        alt="image description"
                        src="/assets/images/products/img16.jpg"
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
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomsm wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                <h3 className="heading">Featured Products</h3>
                <div className="mt-product4 mt-paddingbottom20">
                  <div className="img">
                    <a href="product-detail.html">
                      <img
                        alt="image description"
                        src="/assets/images/products/img17.jpg"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <div className="frame">
                      <strong>
                        <a href="product-detail.html">Bombi Chair</a>
                      </strong>
                    </div>
                    <del className="off">$75,00</del>
                    <span className="price">$33,00</span>
                  </div>
                </div>
                <div className="mt-product4 mt-paddingbottom20">
                  <div className="img">
                    <a href="product-detail.html">
                      <img
                        alt="image description"
                        src="/assets/images/products/img18.jpg"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <div className="frame">
                      <strong>
                        <a href="product-detail.html">Oyo Cantilever Chair</a>
                      </strong>
                    </div>
                    <span className="price">$55,00</span>
                  </div>
                </div>
                <div className="mt-product4 mt-paddingbottom20">
                  <div className="img">
                    <a href="product-detail.html">
                      <img
                        alt="image description"
                        src="/assets/images/products/img19.jpg"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <div className="frame">
                      <strong>
                        <a href="product-detail.html">Puff Chair</a>
                      </strong>
                    </div>
                    <del className="off">$75,00</del>
                    <span className="price">$55,00</span>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomxs wow fadeInRight"
                data-wow-delay="0.4s"
              >
                <h3 className="heading">Sale Products</h3>
                <div className="mt-product4 mt-paddingbottom20">
                  <div className="img">
                    <a href="product-detail.html">
                      <img
                        alt="image description"
                        src="/assets/images/products/img20.jpg"
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
                <div className="mt-product4 mt-paddingbottom20">
                  <div className="img">
                    <a href="product-detail.html">
                      <img
                        alt="image description"
                        src="/assets/images/products/img21.jpg"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <div className="frame">
                      <strong>
                        <a href="product-detail.html">Oyo Cantilever Chair</a>
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
                    <span className="price">$55,00</span>
                  </div>
                </div>
                <div className="mt-product4 mt-paddingbottom20">
                  <div className="img">
                    <a href="product-detail.html">
                      <img
                        alt="image description"
                        src="/assets/images/products/img16.jpg"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <div className="frame">
                      <strong>
                        <a href="product-detail.html">Kurve Chair</a>
                      </strong>
                    </div>
                    <del className="off">$75,00</del>
                    <span className="price">$55,00</span>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-3 wow fadeInRight"
                data-wow-delay="0.4s"
              >
                <h3 className="heading">Top Rated Products</h3>
                <div className="mt-product4 mt-paddingbottom20">
                  <div className="img">
                    <a href="product-detail.html">
                      <img
                        alt="image description"
                        src="/assets/images/products/img14.jpg"
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
                        alt="image description"
                        src="/assets/images/products/img15.jpg"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <div className="frame">
                      <strong>
                        <a href="product-detail.html">Oyo Cantilever Chair</a>
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
                        alt="image description"
                        src="/assets/images/products/img16.jpg"
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer
        id="mt-footer"
        className="style1 wow fadeInUp"
        data-wow-delay="0.4s"
      >
        <div className="footer-holder dark">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomsm">
                <div className="f-widget-about">
                  <div className="logo">
                    <a href="#">
                      <img src="/assets/images/logo.png" alt="Schon" />
                    </a>
                  </div>
                  <p>
                    Exercitation ullamco laboris nisi ut aliquip ex commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <ul className="list-unstyled social-network">
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomsm">
                <div className="f-widget-news">
                  <h3 className="f-widget-heading">Twitter</h3>
                  <div className="news-articles">
                    <div className="news-column">
                      <i className="fa fa-twitter"></i>
                      <div className="txt-box">
                        <p>
                          Laboris nisi ut <a href="#">#schön</a> aliquip econse-{" "}
                          <br />
                          quat. <a href="#">https://t.co/vreNJ9nEDt</a>
                        </p>
                      </div>
                    </div>
                    <div className="news-column">
                      <i className="fa fa-twitter"></i>
                      <div className="txt-box">
                        <p>
                          Ficia deserunt mollit anim id est labo- <br />
                          rum. incididunt ut labore et dolore <br />
                          <a href="#">https://t.co/vreNJ9nEDt</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomxs">
                <div className="f-widget-tabs">
                  <h3 className="f-widget-heading">Product Tags</h3>
                  <ul className="list-unstyled tabs">
                    <li>
                      <a href="#">Sofas</a>
                    </li>
                    <li>
                      <a href="#">Armchairs</a>
                    </li>
                    <li>
                      <a href="#">Living</a>
                    </li>
                    <li>
                      <a href="#">Bedroom</a>
                    </li>
                    <li>
                      <a href="#">Lighting</a>
                    </li>
                    <li>
                      <a href="#">Tables</a>
                    </li>
                    <li>
                      <a href="#">Pouf</a>
                    </li>
                    <li>
                      <a href="#">Wood</a>
                    </li>
                    <li>
                      <a href="#">Office</a>
                    </li>
                    <li>
                      <a href="#">Outdoor</a>
                    </li>
                    <li>
                      <a href="#">Kitchen</a>
                    </li>
                    <li>
                      <a href="#">Stools</a>
                    </li>
                    <li>
                      <a href="#">Footstools</a>
                    </li>
                    <li>
                      <a href="#">Desks</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 text-right">
                <div className="f-widget-about">
                  <h3 className="f-widget-heading">Information</h3>
                  <ul className="list-unstyled address-list align-right">
                    <li>
                      <i className="fa fa-map-marker"></i>
                      <address>
                        Connaugt Road Central Suite 18B, 148 <br />
                        New Yankee
                      </address>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>
                      <a href="tel:15553332211">+1 (555) 333 22 11</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i>
                      <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#115;&#099;&#104;&#111;&#110;&#046;&#099;&#104;&#097;&#105;&#114;">
                        &#105;&#110;&#102;&#111;&#064;&#115;&#099;&#104;&#111;&#110;&#046;&#099;&#104;&#097;&#105;&#114;
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <p>
                  © <a href="#">schön.</a> - All rights Reserved
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 text-right">
                <div className="bank-card">
                  <img src="/assets/images/bank-card.png" alt="bank-card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Home;
