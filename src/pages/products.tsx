import { FC, useContext, useEffect, useMemo, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import { Link, useNavigate } from "react-router-dom";
import { PageRoutes } from "../lib/constants";
import useApi from "../lib/hooks/useApi";
import { PRODUCTS_APIS } from "../lib/constants/api-constants";
import ProductTileLarge from "../lib/components/product-tile-large";
import { getAllSizes } from "../lib/utils/product-utils";
import { AppContext } from "../lib/contexts/app-context";
import { CartContext } from "../lib/contexts/cart-context";
import { Product } from "../lib/awsApis";

const Products: FC<PageProps> = (pageProps) => {
  const { data: products, getData: getProducts } = useApi<Product[]>();
  const [selectedSizeFilters, setSelectedSizeFilters] = useState<SizeFilter[]>(
    []
  );
  const [selectedProductId, setSelectedProductId] = useState<string>();
  const navigatTo = useNavigate();
  const { appState, updateAppState } = useContext(AppContext);
  const { addProduct } = useContext(CartContext);

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
          <div
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
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Products;
