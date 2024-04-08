import { forEach, countBy, uniq, filter, map } from "lodash";
import { Product } from "../awsApis";

export const getAllSizes = (products: Product[]): SizeFilter[] => {
  const output: string[] = [];

  forEach(products, (product) => {
    const productVariants = JSON.parse(product.variants) as ProductVariant[];

    if (productVariants) {
      output.push(...productVariants.map((variant) => variant.size));
    }
  });

  const uniqueSizes = uniq(output);

  const sizeFilters: SizeFilter[] = [];
  forEach(uniqueSizes, (size) => {
    sizeFilters.push({
      size: size,
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
    } as SizeFilter);
  });

  return sizeFilters;
};

export const getBestSellers = (products: Product[]): Product[] => {
  return products.filter((product) => product.tag === "Best Seller");
};

export const getProductBrands = (products: Product[]): string[] => {
  return products.map((product) => product.brand);
};
