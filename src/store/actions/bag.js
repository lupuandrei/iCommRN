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
