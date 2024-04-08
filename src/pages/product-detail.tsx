import { FC, useContext, useEffect, useState } from "react";
import PageLayout from "../lib/components/page-layout";
import { Link } from "react-router-dom";
import useApi from "../lib/hooks/useApi";
import { PRODUCTS_APIS } from "../lib/constants/api-constants";
import { AppContext } from "../lib/contexts/app-context";
import { PageRoutes } from "../lib/constants";
import { CartContext } from "../lib/contexts/cart-context";
import { Product } from "../lib/awsApis";
import ProductVariantsList from "../lib/components/product-variants-list";
import Loader from "../lib/components/loader";

const ProductDetail: FC<PageProps> = (pageProps) => {
  const { data: product, getData: getProductById } = useApi<Product>();
  const { appState } = useContext(AppContext);
  const variants = JSON.parse(product?.variants ?? "[]") as ProductVariant[];
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const { addProduct } = useContext(CartContext);
  useEffect(() => {
    getProductById(
      `${PRODUCTS_APIS.GET_PRODUCT_BY_ID}${appState.selectedProductId ?? ""}`
    );
  }, [appState.selectedProductId]);

  return (
    <PageLayout {...pageProps}>
      {product ? (
        <section className="mt-product-detial" data-wow-delay="0.4s">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="slider">
                  <div className="product-slider">
                    <div className="slide">
                      <img
                        className="remove-bg"
                        src={product?.featuredImage}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="detial-holder">
                  <ul className="list-unstyled breadcrumbs">
                    <li>
                      <Link to={PageRoutes.Home}>
                        Home <i className="fa fa-angle-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={PageRoutes.Products}>
                        Products <i className="fa fa-angle-right"></i>
                      </Link>
                    </li>
                    <li>{product?.title}</li>
                  </ul>
                  <h2>{product?.title}</h2>
                  <br />
                  <div className="text-holder">
                    <span className="price">
                      <i className="fa fa-gbp"></i>{" "}
                      {variants?.[selectedVariantIndex]?.price}
                    </span>
                  </div>
                  <br />
                  <div className="text-holder">
                    <ProductVariantsList
                      variants={variants}
                      selectedVariantIndex={selectedVariantIndex}
                      onVariantSelected={setSelectedVariantIndex}
                    />
                  </div>
                  <form action="#" className="product-form">
                    <fieldset>
                      <div className="row-val">
                        <button
                          type="button"
                          className="btn-type1 bg-transparent-with-border bg-dark-on-hover"
                          onClick={() => addProduct(product)}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </fieldset>
                  </form>
                  <hr />
                  <div className="txt-wrap">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: product?.body.replaceAll("\n", "<br />"),
                      }}
                    ></p>
                  </div>
                  <h3>Shipping details</h3>
                  <div className="txt-wrap">
                    <p>
                      All Bulk products have a 14-16 day lead time for you to
                      receive them.
                    </p>
                    <p>
                      Once we receive them In the UK we will ship them straight
                      to you with next day delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
      <br />
    </PageLayout>
  );
};

export default ProductDetail;
