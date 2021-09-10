import * as bagTypes from '../types/bag';

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case bagTypes.BAG_PRODUCT_ADD:
      const newState = {...state};

      return newState;
    default:
      return state;
  }
};
