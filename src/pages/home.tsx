import { FC, useContext, useEffect, useMemo, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import Slider from "../lib/components/slider";
import BannerSlider from "../lib/components/home-page/banner-slider";
import Tabs from "../lib/components/tabs";
import RightSideMenu from "../lib/components/right-side-menu";
import WebSearch from "../lib/components/web-search";
import Marquee from "react-fast-marquee";
import useApi from "../lib/hooks/useApi";
import { PRODUCTS_APIS } from "../lib/constants/api-constants";
import { AppContext } from "../lib/contexts/app-context";
import { Link, useNavigate } from "react-router-dom";
import { BEST_SELLER, PageRoutes } from "../lib/constants";
import { CartContext } from "../lib/contexts/cart-context";
import { Product } from "../lib/awsApis";
import { useMediaQuery } from "react-responsive";
import ProductSlides from "../lib/components/product-slides";

const Home: FC<PageProps> = (pageProps) => {
  const { data: products, getData: getProducts } = useApi<Product[]>();

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [currentTabbedSliderPageIndex, setCurrentTabbedSliderPageIndex] =
    useState<number>(0);
  const [selectedProductId, setSelectedProductId] = useState<string>();
  const navigatTo = useNavigate();
  const { appState, updateAppState } = useContext(AppContext);
  const { addProduct } = useContext(CartContext);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const itemsPerPage = useMemo<number>(() => (isMobile ? 2 : 4), [isMobile]);
  // const totalPages = useMemo(() => products?.length / itemsPerPage, [products]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const bestSellers = useMemo(() => {
    const output = (products ?? []).filter(
      (product) => product?.tag?.toLowerCase() === BEST_SELLER
    );

    return output.length > 0 ? output : products;
  }, [products]);

  useEffect(() => {
    setCurrentTabbedSliderPageIndex(0);
  }, [selectedTabIndex]);

  useEffect(() => {
    getProducts(PRODUCTS_APIS.GET_ALL_PRODUCTS_API);
  }, []);

  useEffect(() => {
    if (selectedProductId) {
      updateAppState({ ...appState, selectedProductId: selectedProductId });
      navigatTo(PageRoutes.ProductDetail);
    }
  }, [navigatTo, selectedProductId]);

  const nextPage = () => {
    if (currentTabbedSliderPageIndex < totalPages - itemsPerPage) {
      setCurrentTabbedSliderPageIndex(currentTabbedSliderPageIndex + 1);
    }
  };

  const prevPage = () => {
    if (currentTabbedSliderPageIndex > 0) {
      setCurrentTabbedSliderPageIndex(currentTabbedSliderPageIndex - 1);
    }
  };

  //const itemsPerPage = useMediaQuery({ query: "(max-width: 768px)" }) ? 1 : 4;

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
                <div className="text-end">
                  <strong className="title">&nbsp;</strong>
                  <h1>&nbsp;</h1>
                  <h2>&nbsp;</h2>
                  <div className="txt">
                    <p>&nbsp;</p>
                  </div>
                  <Link to="/products" className="shop">
                    View Products
                  </Link>
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
          <img
            className="pt-4 d-sm-block d-none"
            src="/assets/images/banner/W4R-how-it-works.png"
            title="How it works"
            alt="How it works"
          />
          <img
            className="pt-4 d-xs-block d-sm-none"
            src="/assets/images/banner/W4R-how-it-works-m.png"
            title="How it works"
            alt="How it works"
          />
          <div className="row">
            <div className="col-xs-12">
              <div
                className="mt-producttabs wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Tabs
                  data={["BEST SELLERS"]}
                  activeTabIndex={selectedTabIndex}
                  onChange={setSelectedTabIndex}
                >
                  <div className="tabs-slider slick-initialized slick-slider">
                    <button
                      type="button"
                      className={`slick-prev slick-arrow d-block icon-arrow-left ${
                        isMobile && "adjust-top-mobile"
                      }`}
                      onClick={prevPage}
                    >
                      Previous
                    </button>
                    <Slider
                      slideTo={currentTabbedSliderPageIndex}
                      slidesPerView={itemsPerPage ?? 4}
                      onPageChange={setCurrentTabbedSliderPageIndex}
                      onLoad={setTotalPages}
                    >
                      {ProductSlides({
                        products: bestSellers,
                        onAddProduct: addProduct,
                        onViewProduct: setSelectedProductId,
                      })}
                    </Slider>
                    <button
                      type="button"
                      className={`slick-next slick-arrow d-block ${
                        isMobile && "adjust-top-mobile"
                      }`}
                      onClick={nextPage}
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
