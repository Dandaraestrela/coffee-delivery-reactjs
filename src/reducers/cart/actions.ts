export enum ActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  UPDATE_PRODUCT_QUANTITY = "UPDATE_PRODUCT_QUANTITY",
  CLEAR_CART = "CLEAR_CART",
}

export function addNewProductAction(newProductId: string, quantity: number) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      newProductId,
      quantity,
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

export function updateProductQuantityAction(
  productId: string,
  quantity: number
) {
  return {
    type: ActionTypes.UPDATE_PRODUCT_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  };
}
