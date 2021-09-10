import * as productTypes from '../types/product';

const initialState = {
  isLoading: false,
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productTypes.PRODUCT_LIST_SUCCESS:
      const newState = {...state};
      newState.products = action.payload;

      return newState;
    default:
      return state;
  }
};
