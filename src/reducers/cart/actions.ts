export enum ActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CLEAR_CART = "CLEAR_CART",
}

export function addNewProductAction(newProductId: string) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      newProductId,
    },
  };
}

export function removeProductAction(productId: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  };
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  };
}
