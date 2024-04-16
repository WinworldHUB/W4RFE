import { FC, useState } from "react";
import ProductHoverAction from "./product-hover-action";
import { Link } from "react-router-dom";
import { Product } from "../awsApis";

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

  const productVariants = JSON.parse(
    product?.variants ?? "[]"
  ) as ProductVariant[];

  const lowestProductPrice =
    productVariants.length > 0
      ? productVariants.reduce(
          (lowestPrice, variant) =>
            lowestPrice > variant.price ? variant.price : lowestPrice,
          product?.price ?? 0
        )
      : product?.price ?? 0.0;

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
          <Link to="" onClick={() => onViewClick(product?.id)}>
            {product?.title}
          </Link>
        </strong>
        <p>
          from <i className="fa fa-gbp"></i>{" "}
          <strong className="price-amount">{lowestProductPrice}</strong>
        </p>
      </div>
    </div>
  );
};

export default ProductTile;
