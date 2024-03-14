import { FC, useState } from "react";
import StarsRating from "./stars";
import ProductHoverAction from "./product-hover-action";
import { Product } from "../../../awsApis";

interface ProductTileProps {
  product: Product;
  isNew?: boolean;
  onAddToCartClick: (id: string) => void;
  onViewClick: (id: string) => void;
}

const ProductTile: FC<ProductTileProps> = ({
  product: { featuredImage, title, price, id },
  isNew = false,
  onAddToCartClick,
  onViewClick,
}) => {
  const [isImageLoadError, setIsImageLoadError] = useState<boolean>(false);

  return (
    <div className="mt-product1 mt-paddingbottom20">
      <div className="box">
        <div className="b1">
          <div className="b2">
            <a href="product-detail.html">
              <img
                src={
                  isImageLoadError
                    ? "/assets/images/products/shoe-placeholder.png"
                    : featuredImage ??
                      "/assets/images/products/shoe-placeholder.png"
                }
                alt=""
                className="w4r-thumbnail"
                onError={() => setIsImageLoadError(true)}
              />
            </a>
            {isNew && (
              <span className="caption">
                <span className="new">NEW</span>
              </span>
            )}
            {/* <StarsRating filledStars={numberOfStars} /> */}
            <ProductHoverAction
              onAddToCartClick={() => onAddToCartClick(id)}
              onViewClick={() => onViewClick(id)}
            />
          </div>
        </div>
      </div>
      <div className="txt">
        <strong className="title">
          <a href="product-detail.html">{title}</a>
        </strong>
        <span className="price">
          <i className="fa fa-gbp"></i> <span>{price ?? "TBD"}</span>
        </span>
      </div>
    </div>
  );
};

export default ProductTile;
