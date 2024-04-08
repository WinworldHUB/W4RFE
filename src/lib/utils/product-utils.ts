import { forEach, countBy, uniq, filter, map } from "lodash";
import { Product } from "../awsApis";
import { DEFAULT_BRAND } from "../constants";

export const getAllSizes = (products: Product[]): ProductFilter[] => {
  const output: string[] = [];

  forEach(products, (product) => {
    const productVariants = JSON.parse(product.variants) as ProductVariant[];

    if (productVariants) {
      output.push(...productVariants.map((variant) => variant.size));
    }
  });

  const uniqueSizes = uniq(output);

  const sizeFilters: ProductFilter[] = [];
  forEach(uniqueSizes, (size) => {
    sizeFilters.push({
      filter: size,
      count: countBy(output, (o) => o === size).true,
      productIds: map(
        filter(products, (product) => {
          const productVariants = JSON.parse(
            product.variants
          ) as ProductVariant[];
          return productVariants.some((variant) => variant.size === size);
        }),
        "id"
      ),
    } as ProductFilter);
  });

  return sizeFilters;
};

export const getAllBrands = (products: Product[]): ProductFilter[] => {
  const output: string[] = Array.from<string>(
    new Set((products ?? []).map((product) => product.brand ?? DEFAULT_BRAND))
  );

  if (output.length === 0)
    return [
      { filter: DEFAULT_BRAND, count: 0, productIds: [] },
    ] as ProductFilter[];

  const brandFilters: ProductFilter[] = [];
  forEach(output, (brand: string) => {
    brandFilters.push({
      filter: brand,
      count: countBy(
        products,
        (product: Product) => (product.brand ?? DEFAULT_BRAND) === brand
      ).true,
      productIds: map(
        filter(
          products,
          (product: Product) => (product.brand ?? DEFAULT_BRAND) === brand
        ),
        "id"
      ),
    } as ProductFilter);
  });

  console.log(
    filter(
      products,
      (product: Product) => (product.brand ?? DEFAULT_BRAND) === DEFAULT_BRAND
    )
  );

  return brandFilters;
};
