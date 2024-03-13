import { FC, useEffect, useState } from "react";
import Slider from "../slider";

interface BestSellersProps {
  title: string;
  subTitle: string;
}

const BestSellers: FC<BestSellersProps> = ({ title, subTitle }) => {
  const [pageIndex, setPageIndex] = useState<number>(0);

  useEffect(() => {
    console.log(pageIndex);
  }, [pageIndex]);

  return (
    <div
      className="mt-bestseller bg-grey text-center wow fadeInUp"
      data-wow-delay="0.4s"
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12 mt-heading text-uppercase">
            <h2 className="heading">{title}</h2>
            <p>{subTitle}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button
              type="button"
              data-role="none"
              className="slick-prev slick-arrow d-block"
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>
            <Slider slideTo={pageIndex} autoHeight={true}>
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
                            src="/assets/images/products/img11.jpg"
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
                            src="/assets/images/products/img12.jpg"
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
                            src="/assets/images/products/img11.jpg"
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
            </Slider>
            <button
              type="button"
              data-role="none"
              className="slick-next slick-arrow d-block"
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
