import * as appTypes from '../types/app';

const initialState = {
  isLoading: false,
  menu: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case appTypes.APP_MENU_SUCCESS:
      const newState = {...state};
      newState.menu = action.payload;

      return newState;
    default:
      return state;
  }
};
