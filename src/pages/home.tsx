import { FC, useEffect, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import Slider from "../lib/components/slider";
import BannerSlider from "../lib/components/home-page/banner-slider";
import Tabs from "../lib/components/tabs";
import { Product } from "../../awsApis";
import ProductTile from "../lib/components/product-tile";
import RightSideMenu from "../lib/components/right-side-menu";
import WebSearch from "../lib/components/web-search";
import BestSellers from "../lib/components/home-page/best-sellers";
import CategoryHighlights from "../lib/components/home-page/category-highlights";
import Marquee from "react-fast-marquee";
import useApi from "../lib/hooks/useApi";
import { PRODUCTS_APIS } from "../lib/constants/api-constants";

const Home: FC<PageProps> = (pageProps) => {
  const { data: products, getData: getProducts } = useApi<Product[]>();
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [currentTabbedSliderPageIndex, setCurrentTabbedSliderPageIndex] =
    useState<number>(0);

  useEffect(() => {
    setCurrentTabbedSliderPageIndex(0);
  }, [selectedTabIndex]);

  useEffect(() => {
    getProducts(PRODUCTS_APIS.GET_ALL_PRODUCTS_API);
  }, []);

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
              <div
                className="mt-producttabs wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Tabs
                  data={["BULK PRODUCTS"]}
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
                      {(products ?? []).map((product, index) => (
                        <div>
                          <ProductTile product={product} numberOfStars={0} />
                          {index + 1 < products.length && (
                            <ProductTile
                              product={products[index + 1]}
                              numberOfStars={0}
                            />
                          )}
                        </div>
                      ))}
                    </Slider>
                    <button
                      type="button"
                      className="slick-next slick-arrow d-block"
                      onClick={() =>
                        setCurrentTabbedSliderPageIndex(
                          currentTabbedSliderPageIndex + 1
                        )
                      }
                    >
                      Next
                    </button>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Home;
