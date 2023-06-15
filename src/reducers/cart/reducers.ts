import { ActionTypes } from "./actions";

export interface ProductType {
  id: string;
  quantity: number;
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
    case ActionTypes.ADD_PRODUCT: {
      if (
        !!state.productsList.find(
          (product) => product.id === action.payload.newProductId
        )
      ) {
        const oldQuantity = state.productsList.find(
          (product) => product.id === action.payload.newProductId
        )?.quantity;
        return {
          productsList: [
            ...state.productsList.filter(
              (product) => product.id !== action.payload.newProductId
            ),
            {
              id: action.payload.newProductId,
              quantity: oldQuantity + action.payload.quantity,
            },
          ],
        };
      }
      return {
        productsList: [
          ...state.productsList,
          {
            id: action.payload.newProductId,
            quantity: action.payload.quantity,
          },
        ],
      };
    }
    case ActionTypes.REMOVE_PRODUCT:
      return {
        productsList: state.productsList.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case ActionTypes.UPDATE_PRODUCT_QUANTITY: {
      if (action.payload.quantity <= 0) return state;
      const productIndex = state.productsList.findIndex(
        (product) => product.id === action.payload.productId
      );
      state.productsList[productIndex] = {
        id: action.payload.productId,
        quantity: action.payload.quantity,
      };
      return { ...state };
    }
    case ActionTypes.CLEAR_CART:
      return { productsList: [] };
    default:
      return state;
  }
}
