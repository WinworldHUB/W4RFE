import { Product } from "../awsApis";
import ProductTile from "./product-tile";
import { getArrayFromTo } from "../utils/array-utils";

interface ProductSlidesProps {
  products: Product[];
  onAddProduct: (product: Product) => void;
  onViewProduct: (productId: string) => void;
  productsPerSlide?: number;
}

const ProductSlides = ({
  products,
  onAddProduct,
  onViewProduct,
  productsPerSlide = 2,
}: ProductSlidesProps) => {
  const output = [];

  if (products?.length > 0) {
    for (let index = 0; index < products?.length; index += productsPerSlide) {
      output.push(
        <div key={index}>
          {getArrayFromTo(index, index + (productsPerSlide - 1)).map(
            (pIndex) =>
              products[pIndex] && (
                <ProductTile
                  product={products[pIndex]}
                  onAddToCartClick={() => onAddProduct(products[pIndex])}
                  onViewClick={onViewProduct}
                />
              )
          )}
        </div>
      );
    }
  }

  return output;
};

export default ProductSlides;
