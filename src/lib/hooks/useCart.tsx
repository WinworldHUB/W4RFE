import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { DEFAULT_LOCAL_STORAGE_KEY_FOR_CART_STATE } from "../constants";
import { Product } from "../awsApis";

const useCart = (): CartState => {
  const {
    setValue: saveCartState,
    getValue: getSavedCartState,
    clearValue: deleteSavedCartState,
  } = useLocalStorage<Product[]>();
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

  const removeProduct = (productIndex: number) => {
    const updatedProductsList = products.filter(
      (product, index) => index !== productIndex
    );
    setProducts(updatedProductsList);
    saveCartState(
      DEFAULT_LOCAL_STORAGE_KEY_FOR_CART_STATE,
      updatedProductsList
    );
  };

  const updateProduct = (updatedProduct: Product, productIndex: number) => {
    if (updatedProduct) {
      const updatedProductsList = products.map((product, index) =>
        index === productIndex ? updatedProduct : product
      ) as Product[];
      setProducts(updatedProductsList);
      saveCartState(
        DEFAULT_LOCAL_STORAGE_KEY_FOR_CART_STATE,
        updatedProductsList
      );
    }
  };

  const clearState = () => {
    setProducts([]);
    deleteSavedCartState(DEFAULT_LOCAL_STORAGE_KEY_FOR_CART_STATE);
  };

  return { products, addProduct, removeProduct, updateProduct, clearState };
};

export default useCart;
