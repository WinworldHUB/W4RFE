import { createContext } from "react";
import useCart from "../hooks/useCart";

const CartContext = createContext<CartState>(null);

const CartContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <CartContext.Provider value={useCart()}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
