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
import Marquee from "react-fast-marquee";

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
    <PageLayout {...pageProps}>
      <RightSideMenu />
      <WebSearch />
      <BannerSlider>
        <div
          className="holder text-center"
          style={{
            backgroundImage: "url(/assets/images/banner/W4R-banner-01.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="text">
                  <strong className="title">THE ALL IN ONE PLATFORM</strong>
                  <h1>FOR</h1>
                  <h2>RESELLERS</h2>
                  <div className="txt">
                    <p>For Resale Only.</p>
                  </div>
                  <a href="product-detail.html" className="shop">
                    BECOME A MEMBER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="holder text-center"
          style={{
            backgroundImage: "url(/assets/images/banner/W4R-banner-02.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="text right">
                  <strong className="title">&nbsp;</strong>
                  <h1>&nbsp;</h1>
                  <h2>&nbsp;</h2>
                  <div className="txt">
                    <p>&nbsp;</p>
                  </div>
                  <a href="product-detail.html" className="shop">
                    BECOME A MEMBER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="holder text-center"
          style={{
            backgroundImage: "url(/assets/images/banner/W4R-banner-03.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="text">
                  <strong className="title">FURNITURE IS HERE</strong>
                  <h1>INNOVATING THE</h1>
                  <h2> RESALE PRINT</h2>
                  <div className="txt">
                    <p>Make The Change Today.</p>
                  </div>
                  <a href="product-detail.html" className="shop">
                    BECOME A MEMBER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BannerSlider>
      <main id="mt-main">
        <div className="marquee-container">
          <Marquee autoFill direction="right" pauseOnHover>
            &nbsp;&nbsp;&nbsp;&nbsp;GUARANTEED
            AUTHENTICITY&nbsp;&nbsp;&nbsp;&nbsp;
          </Marquee>
        </div>
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
    </PageLayout>
  );
};

export default Home;
