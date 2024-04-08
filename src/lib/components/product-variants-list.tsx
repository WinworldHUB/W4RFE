import { FC } from "react";

interface ProductVariantsListProps {
  variants: ProductVariant[];
  selectedVariantIndex: number;
  onVariantSelected: (index: number) => void;
}

const ProductVariantsList: FC<ProductVariantsListProps> = ({
  variants,
  selectedVariantIndex,
  onVariantSelected,
}) => {
  return (
    <div>
      {(variants ?? []).map((variant, index) => (
        <span key={variant.size}>
          &nbsp;&nbsp;
          <button
            disabled={!variant.available}
            className={`m-1 btn-type1 ${
              selectedVariantIndex === index
                ? "bg-dark"
                : "bg-light bg-dark-on-hover text-muted"
            }`}
            onClick={() => onVariantSelected(index)}
          >
            {variant.size}
          </button>
        </span>
      ))}
    </div>
  );
};

export default ProductVariantsList;
