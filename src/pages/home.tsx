import { FC, useEffect, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import Slider from "../lib/components/slider";
import BannerSlider from "../lib/components/home-page/banner-slider";
import Tabs from "../lib/components/tabs";
import { Product } from "../../awsApis";
import ProductTile from "../lib/components/product-tile";
import RightSideMenu from "../lib/components/right-side-menu";
import WebSearch from "../lib/components/web-search";
import FeaturedCategories from "../lib/components/home-page/featured-categories";
import BestSellers from "../lib/components/home-page/best-sellers";
import CategoryHighlights from "../lib/components/home-page/category-highlights";

const Home: FC<PageProps> = (pageProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [currentTabbedSliderPageIndex, setCurrentTabbedSliderPageIndex] =
    useState<number>(0);

  useEffect(() => {
    setCurrentTabbedSliderPageIndex(0);
  }, [selectedTabIndex]);

  const sampleProduct = {
    featuredImage: "/assets/images/products/img01.jpg",
    title: "Product Title",
    variants: "variants",
    body: "",
    category: "",
    id: "",
    otherImages: [],
    price: 0.0,
    published: true,
    quantity: 0,
    size: "",
    taxable: true,
  } as Product;

  return (
    <PageLayout menuItems={[]} selectedMenuId={0}>
      <RightSideMenu />
      <WebSearch />
      <BannerSlider>
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
      </BannerSlider>
      <main id="mt-main">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <FeaturedCategories />
              <div
                className="mt-producttabs wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Tabs
                  data={["FEATURED", "LATEST", "BEST SELLER"]}
                  activeTabIndex={selectedTabIndex}
                  onChange={setSelectedTabIndex}
                >
                  <div className="tabs-slider slick-initialized slick-slider">
                    <button
                      type="button"
                      className="slick-prev slick-arrow d-block"
                      onClick={() =>
                        setCurrentTabbedSliderPageIndex(
                          currentTabbedSliderPageIndex - 1
                        )
                      }
                    >
                      Previous
                    </button>
                    <Slider slideTo={currentTabbedSliderPageIndex}>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                    </Slider>
                    <button
                      type="button"
                      data-role="none"
                      className="slick-next slick-arrow"
                      aria-label="Next"
                      role="button"
                      style={{ display: "block" }}
                    >
                      Next
                    </button>
                  </div>
                  <div className="tabs-slider slick-initialized slick-slider">
                    <button
                      type="button"
                      data-role="none"
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      role="button"
                      style={{ display: "block" }}
                    >
                      Previous
                    </button>
                    <Slider slideTo={0}>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                    </Slider>
                    <button
                      type="button"
                      data-role="none"
                      className="slick-next slick-arrow"
                      aria-label="Next"
                      role="button"
                      style={{ display: "block" }}
                    >
                      Next
                    </button>
                  </div>
                  <div className="tabs-slider slick-initialized slick-slider">
                    <button
                      type="button"
                      data-role="none"
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      role="button"
                      style={{ display: "block" }}
                    >
                      Previous
                    </button>
                    <Slider slideTo={0}>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                      <div>
                        <ProductTile
                          product={sampleProduct}
                          isNew
                          numberOfStars={1}
                        />
                        <ProductTile
                          product={sampleProduct}
                          isNew={false}
                          numberOfStars={2}
                        />
                      </div>
                    </Slider>
                    <button
                      type="button"
                      data-role="none"
                      className="slick-next slick-arrow"
                      aria-label="Next"
                      role="button"
                      style={{ display: "block" }}
                    >
                      Next
                    </button>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <BestSellers title="BEST SELLER" subTitle="OUR BEST SELLERS" />
        <CategoryHighlights />
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
