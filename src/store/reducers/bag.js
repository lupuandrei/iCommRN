import {LOGOUT_SUCCESS} from '../types/auth';
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
  const newState = {...state};
  switch (action.type) {
    case bagTypes.BAG_PRODUCT_ADD:
      var {productId, quantity} = action.payload;

      // check if the product has been already into shop cart
      if (!state.bag[productId.toString()]) {
        // is not into the cart add it
        newState.bag[productId.toString()] = {quantity};
      } else {
        // it's already into the cart, increment the quantity
        newState.bag[`${productId}`].quantity++;
      }

      console.log('newState', newState);
      return newState;
    case bagTypes.BAG_PRODUCT_QUANTITY_INCREASE:
      var {productId} = action.payload;

      newState.bag[`${productId}`].quantity++;
      console.log('newState', newState);

      return newState;
    case bagTypes.BAG_PRODUCT_QUANTITY_DECREASE:
      var {productId} = action.payload;

      newState.bag[`${productId}`].quantity--;
      console.log('newState', newState);

      return newState;
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
