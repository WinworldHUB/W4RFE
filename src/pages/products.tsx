import { FC, useContext, useEffect, useMemo, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import { useNavigate } from "react-router-dom";
import { BEST_SELLER, PageRoutes } from "../lib/constants";
import useApi from "../lib/hooks/useApi";
import { PRODUCTS_APIS } from "../lib/constants/api-constants";
import {
  getAllBrands,
  getAllSizes,
  getBestSellersFilter,
} from "../lib/utils/product-utils";
import { AppContext } from "../lib/contexts/app-context";
import { CartContext } from "../lib/contexts/cart-context";
import { Product } from "../lib/awsApis";
import Slider from "../lib/components/slider";
import ProductTile from "../lib/components/product-tile";
import Tabs from "../lib/components/tabs";
import { useMediaQuery } from "react-responsive";
import ProductSlides from "../lib/components/product-slides";
import { Container } from "react-bootstrap";

const Products: FC<PageProps> = (pageProps) => {
  const { data: products, getData: getProducts } = useApi<Product[]>();
  const [selectedSizeFilters, setSelectedSizeFilters] = useState<
    ProductFilter[]
  >([]);
  const [selectedProductId, setSelectedProductId] = useState<string>();
  const navigatTo = useNavigate();
  const { appState, updateAppState } = useContext(AppContext);
  const { addProduct } = useContext(CartContext);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const itemsPerPage = useMemo<number>(() => (isMobile ? 2 : 4), [isMobile]);

  const [totalPages, setTotalPages] = useState<number>(0);

  const [currentTabbedSliderPageIndex, setCurrentTabbedSliderPageIndex] =
    useState<number>(0);
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

  useEffect(() => {
    if (selectedProductId) {
      updateAppState({ ...appState, selectedProductId: selectedProductId });
      navigatTo(PageRoutes.ProductDetail);
    }
  }, [navigatTo, selectedProductId]);

  useEffect(() => {
    getProducts(PRODUCTS_APIS.GET_ALL_PRODUCTS_API);
  }, []);

  const sizesFilter = getAllBrands(products ?? []);

  const filteredProducts = useMemo(() => {
    if (selectedSizeFilters.length === 0) {
      return products;
    }
    return products?.filter((p) =>
      selectedSizeFilters.some((f) => f.productIds.includes(p.id))
    );
  }, [products, selectedSizeFilters]);

  const handleFilterChange = (
    filter: ProductFilter,
    applied: boolean,
    isShowAll: boolean = false,
    isApplySingle: boolean = false
  ) => {
    setCurrentTabbedSliderPageIndex(0);

    if (isShowAll) {
      setSelectedSizeFilters([]);
    } else if (applied) {
      setSelectedSizeFilters(
        isApplySingle ? [filter] : [...selectedSizeFilters, filter]
      );
    } else {
      setSelectedSizeFilters(
        selectedSizeFilters.filter((f) => f.filter !== filter.filter)
      );
    }
  };

  return (
    <PageLayout {...pageProps}>
      <div className="container-wish">
        <div className="row">
          <div className="col-xs-12 d-block d-sm-none pt-2 bg-light">
            <Container>
              <h2>FILTER</h2>
              <select
                className="form-control"
                title="Filter by brand"
                onChange={(e) =>
                  handleFilterChange(
                    sizesFilter?.[e.target.selectedIndex],
                    true,
                    e.target.selectedIndex === 0,
                    true
                  )
                }
              >
                {(sizesFilter ?? []).map((sizeFilter, index) => (
                  <option key={`${sizeFilter.productIds}-${index}`}>
                    {sizeFilter.filter}
                  </option>
                ))}
              </select>
              <hr className="border-0" />
            </Container>
          </div>
          <aside
            id="sidebar"
            className={`col-xs-12 col-sm-3 wow fadeInLeft ${
              isMobile && "d-none"
            }`}
            data-wow-delay="0.4s"
          >
            <section className="shop-widget filter-widget bg-grey">
              <h2>FILTER</h2>
              <ul className="list-unstyled nice-form">
                {(sizesFilter ?? []).map(
                  (sizeFilter, index) =>
                    sizeFilter.count > 0 && (
                      <li key={`sizeFilter-${index}`}>
                        <label
                          htmlFor={`sizeFilter-${index}`}
                          key={`sizeFilter-${index}`}
                        >
                          <input
                            id={`sizeFilter-${index}`}
                            type="checkbox"
                            onChange={(e) =>
                              handleFilterChange(sizeFilter, e.target.checked)
                            }
                          />
                          <span className="fake-input"></span>
                          <span className="fake-label">
                            {sizeFilter.filter}
                          </span>
                        </label>
                        <span className="num">{sizeFilter.count}</span>
                      </li>
                    )
                )}
              </ul>
            </section>
          </aside>
          <div className="col-xs-12 col-sm-9">
            <div className="mt-producttabs wow fadeInUp" data-wow-delay="0.4s">
              <Tabs data={["PRODUCTS"]} activeTabIndex={0} onChange={() => {}}>
                <div className="tabs-slider slick-initialized slick-slider">
                  <button
                    type="button"
                    className={`slick-prev slick-arrow d-block ${
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
                    {/* {productsGrid()} */}
                    {ProductSlides({
                      products: filteredProducts,
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
    </PageLayout>
  );
};

export default Products;
