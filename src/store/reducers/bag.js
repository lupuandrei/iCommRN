import * as bagTypes from '../types/bag';

const initialState = {
  /**
   * {
   *   "{productId}": {
   *     "quantity": 1
   *   }
   * }
   */
  bag: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case bagTypes.BAG_PRODUCT_ADD:
      const newState = {...state};
      const {productId, quantity} = action.payload;

      // check if the product has been already into shop cart
      if (!state.bag[productId.toString()]) {
        // is not into the cart add it
        newState.bag[productId.toString()] = {quantity};
      } else {
        // it's already into the cart, increment the quantity
        newState.bag[`${productId}`].quantity =
          newState.bag[`${productId}`].quantity + quantity;
      }

      return newState;
    default:
      return state;
  }
};
