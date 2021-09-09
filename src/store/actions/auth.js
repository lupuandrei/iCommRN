import * as authTypes from '../types/auth';
import * as authAPI from '../../api/auth';

// STATUSES

const loginRequest = () => {
  return {type: authTypes.LOGIN_REQUEST};
};

const loginSuccess = payload => {
  return {type: authTypes.LOGIN_SUCCESS, payload};
};

const loginFailure = payload => {
  return {type: authTypes.LOGIN_FAILURE, payload};
};

// Login
export const login = (email, password) => {
  return async dispatch => {
    dispatch(loginRequest());
    return authAPI.login(email, password).then(
      response => {
        dispatch(loginSuccess(response));
        return response;
      },
      error => {
        dispatch(loginFailure(error));
        throw error;
      },
    );
  };
};

// Logout
export const logout = () => {
  return {type: authTypes.LOGOUT_SUCCESS};
};
