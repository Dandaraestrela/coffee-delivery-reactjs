import {
  addNewProductAction,
  clearCartAction,
  removeProductAction,
} from "@/reducers/cart/actions";
import { ProductType, cartReducer } from "@/reducers/cart/reducers";
import { ReactNode, createContext, useReducer, useState } from "react";

interface CartContextType {
  productsList: ProductType[];
  clearCart: () => void;
  addBeverageToCart: (id: string) => void;
  removeBeverageFromCart: (id: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    productsList: [],
  });

  const { productsList } = cartState;

  const clearCart = () => {
    dispatch(clearCartAction());
  };

  const addBeverageToCart = (id: string) => {
    dispatch(addNewProductAction(id));
  };

  const removeBeverageFromCart = (id: string) => {
    dispatch(removeProductAction(id));
  };

  return (
    <CartContext.Provider
      value={{
        productsList,
        clearCart,
        addBeverageToCart,
        removeBeverageFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
