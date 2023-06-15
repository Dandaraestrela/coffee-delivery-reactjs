import {
  addNewProductAction,
  clearCartAction,
  removeProductAction,
  updateProductQuantityAction,
} from "@/reducers/cart/actions";
import { ProductType, cartReducer } from "@/reducers/cart/reducers";
import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

interface CartContextType {
  productsList: ProductType[];
  clearCart: () => void;
  addProductToCart: (id: string, quantity: number) => void;
  removeProductFromCart: (id: string) => void;
  updateProductQuantity: (id: string, quantity: number) => void;
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

  const addProductToCart = (id: string, quantity: number) => {
    dispatch(addNewProductAction(id, quantity));
  };

  const removeProductFromCart = (id: string) => {
    dispatch(removeProductAction(id));
  };

  const updateProductQuantity = (id: string, quantity: number) => {
    dispatch(updateProductQuantityAction(id, quantity));
  };

  return (
    <CartContext.Provider
      value={{
        productsList,
        clearCart,
        addProductToCart,
        removeProductFromCart,
        updateProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
