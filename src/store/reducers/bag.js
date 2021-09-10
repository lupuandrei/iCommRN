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
  switch (action.type) {
    case bagTypes.BAG_PRODUCT_ADD:
      var {bag} = state;
      var {productId, quantity} = action.payload;

      // check if the product has been already into shop cart
      if (!bag[productId.toString()]) {
        // is not into the cart add it
        bag[productId.toString()] = {quantity};
      } else {
        // it's already into the cart, increment the quantity
        bag[`${productId}`].quantity++;
      }

      return {
        ...state,
        bag: Object.assign({}, bag),
      };
    case bagTypes.BAG_PRODUCT_REMOVE:
      var {bag} = state;
      var {productId} = action.payload;

      delete bag[`${productId}`];

      return {
        ...state,
        bag: Object.assign({}, bag),
      };
    case bagTypes.BAG_PRODUCT_QUANTITY_INCREASE:
      var {bag} = state;

      var {productId} = action.payload;
      bag[`${productId}`].quantity++;

      return {
        ...state,
        bag: Object.assign({}, bag),
      };
    case bagTypes.BAG_PRODUCT_QUANTITY_DECREASE:
      var {bag} = state;

      var {productId} = action.payload;
      bag[`${productId}`].quantity--;

      return {
        ...state,
        bag: Object.assign({}, bag),
      };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
