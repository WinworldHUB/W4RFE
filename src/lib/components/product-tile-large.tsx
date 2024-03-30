import { FC, useState } from "react";
import ProductHoverAction from "./product-hover-action";
import { Link } from "react-router-dom";
import { PageRoutes } from "../constants";
import { Product } from "../awsApis";

interface ProductTileProps {
  product: Product;
  onAddToCartClick: (id: string) => void;
  onViewClick: (id: string) => void;
  className?: string;
}

const ProductTileLarge: FC<ProductTileProps> = ({
  product,
  onAddToCartClick,
  onViewClick,
  className,
}) => {
  const [isImageLoadError, setIsImageLoadError] = useState<boolean>(false);

  return (
    <div className={`mt-product1 mt-paddingbottom20 ${className}`}>
      <div className="box">
        <div className="b1">
          <div className="b2">
            <Link to="" onClick={() => onViewClick(product?.id)}>
              <img
                src={
                  isImageLoadError
                    ? "/assets/images/products/shoe-placeholder.png"
                    : product?.featuredImage ??
                      "/assets/images/products/shoe-placeholder.png"
                }
                alt=""
                onError={() => setIsImageLoadError(true)}
              />
            </Link>
            <ProductHoverAction
              onAddToCartClick={() => onAddToCartClick(product?.id)}
              onViewClick={() => onViewClick(product?.id)}
            />
          </div>
        </div>
      </div>
      <div className="txt">
        <strong className="title">
          <Link to={PageRoutes.ProductDetail}>{product?.title}</Link>
        </strong>
        <span className="price">
          <i className="fa fa-gbp"></i> <span>{product?.price}</span>
        </span>
      </div>
    </div>
  );
};

export default ProductTileLarge;
