import * as types from '../types/auth';

const initialState = {
  isLoading: false,
  session: {
    accessToken: '',
    refreshToken: '',
    expirationTime: null,
  },
};

export default (state = initialState, action = {}) => {
  const newState = {...state};
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      var {accessToken, refreshToken, expirationTime} = action.payload;

      newState.session = {
        ...state.session,
        accessToken: accessToken,
        refreshToken: refreshToken,
        expirationTime: expirationTime
      };

      return newState;
    case types.LOGOUT_SUCCESS:
    default:
      return state;
  }
};
