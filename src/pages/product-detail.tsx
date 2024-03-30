import { FC, useContext, useEffect } from "react";
import PageLayout from "../lib/components/page-layout";
import { Link } from "react-router-dom";
import useApi from "../lib/hooks/useApi";
import { PRODUCTS_APIS } from "../lib/constants/api-constants";
import { AppContext } from "../lib/contexts/app-context";
import { PageRoutes } from "../lib/constants";
import { CartContext } from "../lib/contexts/cart-context";
import { Product } from "../lib/awsApis";

const ProductDetail: FC<PageProps> = (pageProps) => {
  const { data: product, getData: getProductById } = useApi<Product>();
  const { appState } = useContext(AppContext);
  const variants = JSON.parse(product?.variants ?? "[]") as ProductVariant[];
  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    getProductById(
      `${PRODUCTS_APIS.GET_PRODUCT_BY_ID}${appState.selectedProductId ?? ""}`
    );
  }, [appState.selectedProductId]);

  return (
    <PageLayout {...pageProps}>
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
                <div className="txt-wrap">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: product?.body.replaceAll("\n", "<br />"),
                    }}
                  ></p>
                </div>
                <div className="text-holder">
                  <span className="price">
                    <i className="fa fa-gbp"></i> {product?.price}
                  </span>
                </div>
                <form action="#" className="product-form">
                  <fieldset>
                    <div className="row-val">
                      <label htmlFor="qty">Size</label>
                      <select title="variants" className="w-100">
                        {(variants ?? []).map((variant) => (
                          <option>{variant.size}</option>
                        ))}
                      </select>
                    </div>
                    <div className="row-val">
                      <button type="button" onClick={() => addProduct(product)}>
                        ADD TO CART
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </PageLayout>
  );
};

export default ProductDetail;
