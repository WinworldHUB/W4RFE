import { FC } from "react";
import StarsRating from "./stars";
import ProductHoverAction from "./product-hover-action";
import { Product } from "../../../awsApis";

interface ProductTileProps {
  product: Product;
  isNew?: boolean;
  numberOfStars?: number;
}

const ProductTile: FC<ProductTileProps> = ({
  product: { featuredImage, title, variants },
  isNew = false,
  numberOfStars,
}) => {
  return (
    <div className="mt-product1 mt-paddingbottom20">
      <div className="box">
        <div className="b1">
          <div className="b2">
            <a href="product-detail.html">
              <img src={featuredImage} alt="" className="w4r-thumbnail" />
            </a>
            {isNew && (
              <span className="caption">
                <span className="new">NEW</span>
              </span>
            )}
            {/* <StarsRating filledStars={numberOfStars} /> */}
            <ProductHoverAction />
          </div>
        </div>
      </div>
      <div className="txt">
        <strong className="title">
          <a href="product-detail.html">{title}</a>
        </strong>
        <span className="price">
          {/* <i className="fa fa-gbp"></i> <span>{variants}</span> */}
        </span>
      </div>
    </div>
  );
};

export default ProductTile;
