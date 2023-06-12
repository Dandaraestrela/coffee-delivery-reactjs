import { ActionTypes } from "./actions";

export interface ProductType {
  id: string;
}

interface CartState {
  productsList: ProductType[];
}

interface ActionType {
  type: ActionTypes;
  payload?: any;
}

export function cartReducer(state: CartState, action: ActionType) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return {
        productsList: [...state.productsList, action.payload.newProductId],
      };
    case ActionTypes.REMOVE_PRODUCT:
      return {
        productsList: state.productsList.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case ActionTypes.CLEAR_CART:
      return { productsList: [] };
    default:
      return state;
  }
}
