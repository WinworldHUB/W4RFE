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
import { Spinner, Toast, ToastContainer } from "react-bootstrap";

const ProductDetail: FC<PageProps> = (pageProps) => {
  const { data: product, getData: getProductById } = useApi<Product>();
  const { appState } = useContext(AppContext);
  const variants = JSON.parse(product?.variants ?? "[]") as ProductVariant[];
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const [isShowProductAddedToast, setIsShowProductAddedToast] =
    useState<boolean>(false);
  const { addProduct } = useContext(CartContext);
  useEffect(() => {
    getProductById(
      `${PRODUCTS_APIS.GET_PRODUCT_BY_ID}${appState.selectedProductId ?? ""}`
    );
  }, [appState.selectedProductId]);

  return (
    <PageLayout {...pageProps}>
      {product ? (
        <section className="mt-product-detial ps-2" data-wow-delay="0.4s">
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
                          onClick={() => {
                            addProduct({
                              ...product,
                              quantity: 1, // Set the default quantity to 1
                              size: variants[selectedVariantIndex].size,
                              price: variants[selectedVariantIndex].price,
                            });
                            setIsShowProductAddedToast(true);
                          }}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </fieldset>
                  </form>
                  <hr />
                  <h3>Product details</h3>
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: product?.body
                        .trimStart()
                        .replaceAll("\n", "<br /><br />"),
                    }}
                  ></div>
                  <br />
                  <hr />
                  <h3>Shipping details</h3>
                  <div className="">
                    <p>
                      Box Packaging: Minimum quantity - 6 Maximum quantity - 10
                    </p>
                    <p>
                      Flat Pack Packaging: Minimum quantity - 6 Maximum quantity
                      - 12
                    </p>
                    <p>
                      Orders will be delivered directly to your chosen address
                      within 12-16 working days.
                    </p>
                    <p>
                      You can track the live status of your order via the
                      'orders' tab.
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
      <ToastContainer
        className="p-3"
        position="top-end"
        style={{ zIndex: 2001 }}
      >
        <Toast
          show={isShowProductAddedToast}
          onClose={() => setIsShowProductAddedToast(false)}
          animation={true}
          autohide={true}
          bg="dark"
        >
          <Toast.Body>
            <h5 className="d-flex justify-content-between align-items-center">
              Product added to cart!
              <Spinner animation="border" variant="light" />
            </h5>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </PageLayout>
  );
};

export default ProductDetail;
