import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { DEFAULT_LOCAL_STORAGE_KEY_FOR_CART_STATE } from "../constants";
import { Product } from "../awsApis";

const useCart = (): CartState => {
  const { setValue: saveCartState, getValue: getSavedCartState } =
    useLocalStorage<Product[]>();
  const [products, setProducts] = useState<Product[]>(
    getSavedCartState(DEFAULT_LOCAL_STORAGE_KEY_FOR_CART_STATE) ?? []
  );

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
    saveCartState(DEFAULT_LOCAL_STORAGE_KEY_FOR_CART_STATE, [
      ...products,
      product,
    ]);
  };

  return { products, addProduct };
};

export default useCart;
