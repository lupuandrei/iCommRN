import * as bagTypes from '../types/bag';

export const bagProductAdd = (productId, quantity = 1) => {
  return dispatch => {
    dispatch({
      type: bagTypes.BAG_PRODUCT_ADD,
      payload: {
        productId,
        quantity,
      },
    });
  };
};

export const bagProductRemove = productId => {
  return dispatch => {
    dispatch({
      type: bagTypes.BAG_PRODUCT_REMOVE,
      payload: {
        productId,
      },
    });
  };
};

export const bagProductQuantityIncrease = productId => {
  return dispatch => {
    dispatch({
      type: bagTypes.BAG_PRODUCT_QUANTITY_INCREASE,
      payload: {
        productId,
      },
    });
  };
};

export const bagProductQuantityDecrease = productId => {
  return dispatch => {
    dispatch({
      type: bagTypes.BAG_PRODUCT_QUANTITY_DECREASE,
      payload: {
        productId,
      },
    });
  };
};
