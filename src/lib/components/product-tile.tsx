import { FC, useState } from "react";
import ProductHoverAction from "./product-hover-action";
import { Product } from "../../awsApis";
import { Link } from "react-router-dom";

interface ProductTileProps {
  product: Product;
  isNew?: boolean;
  onAddToCartClick: (id: string) => void;
  onViewClick: (id: string) => void;
  className?: string;
}

const ProductTile: FC<ProductTileProps> = ({
  product,
  isNew = false,
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
                className="w4r-thumbnail"
                onError={() => setIsImageLoadError(true)}
              />
            </Link>
            {isNew && (
              <span className="caption">
                <span className="new">NEW</span>
              </span>
            )}
            {/* <StarsRating filledStars={numberOfStars} /> */}
            <ProductHoverAction
              onAddToCartClick={() => onAddToCartClick(product?.id)}
              onViewClick={() => onViewClick(product?.id)}
            />
          </div>
        </div>
      </div>
      <div className="txt">
        <strong className="title">
          <a href="product-detail.html">{product?.title}</a>
        </strong>
        <span className="price">
          <i className="fa fa-gbp"></i> <span>{product?.price ?? "TBD"}</span>
        </span>
      </div>
    </div>
  );
};

export default ProductTile;
