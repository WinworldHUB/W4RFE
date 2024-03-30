import { FC, useContext, useEffect, useMemo, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import Slider from "../lib/components/slider";
import BannerSlider from "../lib/components/home-page/banner-slider";
import Tabs from "../lib/components/tabs";
import ProductTile from "../lib/components/product-tile";
import RightSideMenu from "../lib/components/right-side-menu";
import WebSearch from "../lib/components/web-search";
import Marquee from "react-fast-marquee";
import useApi from "../lib/hooks/useApi";
import { PRODUCTS_APIS } from "../lib/constants/api-constants";
import { AppContext } from "../lib/contexts/app-context";
import { Link, useNavigate } from "react-router-dom";
import { PageRoutes } from "../lib/constants";
import useOrder from "../lib/hooks/useOrder";
import { CartContext } from "../lib/contexts/cart-context";
import { Product } from "../lib/awsApis";

const Home: FC<PageProps> = (pageProps) => {
  const { data: products, getData: getProducts } = useApi<Product[]>();
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [currentTabbedSliderPageIndex, setCurrentTabbedSliderPageIndex] =
    useState<number>(0);
  const [selectedProductId, setSelectedProductId] = useState<string>();
  const navigatTo = useNavigate();
  const { appState, updateAppState } = useContext(AppContext);
  const { order, setOrder } = useOrder(0);
  const totalPages = useMemo(() => products?.length / 2, [products]);
  const { addProduct } = useContext(CartContext);

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
    if (currentTabbedSliderPageIndex < totalPages - 1) {
      setCurrentTabbedSliderPageIndex(currentTabbedSliderPageIndex + 1);
    }
  };

  const prevPage = () => {
    if (currentTabbedSliderPageIndex > 0) {
      setCurrentTabbedSliderPageIndex(currentTabbedSliderPageIndex - 1);
    }
  };

  useEffect(() => {
    console.log(appState);
    updateAppState({ ...appState, order: order });
  }, [order]);

  const productsGrid = (): JSX.Element[] => {
    const output = [];

    if (products?.length > 0) {
      for (let index = 0; index < products?.length; index += 2) {
        output.push(
          <div key={index}>
            <ProductTile
              product={products[index]}
              onAddToCartClick={() => addProduct(products[index])}
              onViewClick={setSelectedProductId}
            />
            <ProductTile
              product={products[index + 1]}
              onAddToCartClick={() => addProduct(products[index + 1])}
              onViewClick={setSelectedProductId}
            />
          </div>
        );
      }
    }

    return output;
  };

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
                  <Link to="" className="shop">
                    BECOME A MEMBER
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
                      onClick={prevPage}
                    >
                      Previous
                    </button>
                    <Slider slideTo={currentTabbedSliderPageIndex}>
                      {productsGrid()}
                    </Slider>
                    <button
                      type="button"
                      className="slick-next slick-arrow d-block"
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
