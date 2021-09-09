import * as appTypes from '../types/app';
import * as appAPI from '../../api/app';

// STATUSES

const appMenuRequest = () => {
  return {type: appTypes.APP_MENU_REQUEST};
}

const appMenuSuccess = (payload) => {
  return {type: appTypes.APP_MENU_SUCCESS, payload}
}

const appMenuFailure = (payload) => {
  return {type: appTypes.APP_MENU_FAILURE, payload};
}


// APP MENU
export const appMenu = () => {
  return async dispatch => {
    dispatch(appMenuRequest());
    return appAPI.appMenu().then(
      response => {
        dispatch(appMenuSuccess(response));
        return response;
      },
      error => {
        dispatch(appMenuFailure(error));
        throw error;
      },
    );
  };
}
