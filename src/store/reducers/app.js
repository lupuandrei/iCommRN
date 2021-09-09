import * as appTypes from '../types/app';

const initialState = {
  isLoading: false,
  menu: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case appTypes.APP_MENU_SUCCESS:
      return state;
    default:
      return state;
  }
};
