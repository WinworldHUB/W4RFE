import { FC, useContext, useEffect, useMemo, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../lib/constants";
import useApi from "../lib/hooks/useApi";
import { PRODUCTS_APIS } from "../lib/constants/api-constants";
import { getAllSizes } from "../lib/utils/product-utils";
import { AppContext } from "../lib/contexts/app-context";
import { CartContext } from "../lib/contexts/cart-context";
import { Product } from "../lib/awsApis";
import Slider from "../lib/components/slider";
import ProductTile from "../lib/components/product-tile";
import Tabs from "../lib/components/tabs";

const Products: FC<PageProps> = (pageProps) => {
  const { data: products, getData: getProducts } = useApi<Product[]>();
  const [selectedSizeFilters, setSelectedSizeFilters] = useState<SizeFilter[]>(
    []
  );
  const [selectedProductId, setSelectedProductId] = useState<string>();
  const navigatTo = useNavigate();
  const { appState, updateAppState } = useContext(AppContext);
  const { addProduct } = useContext(CartContext);
  const totalPages = useMemo(() => products?.length / 4, [products]);
  const [currentTabbedSliderPageIndex, setCurrentTabbedSliderPageIndex] =
    useState<number>(0);
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
    if (selectedProductId) {
      updateAppState({ ...appState, selectedProductId: selectedProductId });
      navigatTo(PageRoutes.ProductDetail);
    }
  }, [navigatTo, selectedProductId]);

  useEffect(() => {
    getProducts(PRODUCTS_APIS.GET_ALL_PRODUCTS_API);
  }, []);

  const sizesFilter = getAllSizes(products ?? []);

  useEffect(() => {
    console.log(selectedSizeFilters);
  }, [selectedSizeFilters]);

  const filteredProducts = useMemo(() => {
    if (selectedSizeFilters.length === 0) {
      return products;
    }
    return products?.filter((p) =>
      selectedSizeFilters.some((f) => f.productIds.includes(p.id))
    );
  }, [products, selectedSizeFilters]);

  const handleFilterChange = (filter: SizeFilter, applied: boolean) => {
    if (applied) {
      setSelectedSizeFilters([...selectedSizeFilters, filter]);
    } else {
      setSelectedSizeFilters(
        selectedSizeFilters.filter((f) => f.size !== filter.size)
      );
    }
  };

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
      <div className="container-wish">
        <div className="row">
          <aside
            id="sidebar"
            className="col-xs-12 col-sm-3 wow fadeInLeft"
            data-wow-delay="0.4s"
          >
            <section className="shop-widget filter-widget bg-grey">
              <h2>FILTER</h2>
              <span className="sub-title">Filter by available size</span>
              <ul className="list-unstyled nice-form">
                {(sizesFilter ?? []).map((sizeFilter, index) => (
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
                      <span className="fake-label">{sizeFilter.size}</span>
                    </label>
                    <span className="num">{sizeFilter.count}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
          <div className="col-xs-12 col-sm-9">
            <div className="mt-producttabs wow fadeInUp" data-wow-delay="0.4s">
              <Tabs data={["PRODUCTS"]} activeTabIndex={0} onChange={() => {}}>
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
          {/* <div
            className="col-xs-12 col-sm-8 col-md-9 wow fadeInRight"
            data-wow-delay="0.4s"
          >
            <ul className="mt-productlisthold list-inline">
              {(filteredProducts ?? []).map((product) => (
                <li>
                  <ProductTileLarge
                    product={product}
                    onAddToCartClick={() => addProduct(product)}
                    onViewClick={setSelectedProductId}
                  />
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </PageLayout>
  );
};

export default Products;
