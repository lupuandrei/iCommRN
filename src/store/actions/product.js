import * as productTypes from '../types/product';
import * as productAPI from '../../api/product';

// STATUSES

const productListRequest = () => {
  return {type: productTypes.PRODUCT_LIST_REQUEST};
};

const productListSuccess = payload => {
  return {type: productTypes.PRODUCT_LIST_SUCCESS, payload};
};

const productListFailure = payload => {
  return {type: productTypes.PRODUCT_LIST_FAILURE, payload};
};

const productDetailsRequest = () => {
  return {type: productTypes.PRODUCT_DETAILS_REQUEST};
};

const productDetailsSuccess = payload => {
  return {type: productTypes.PRODUCT_DETAILS_SUCCESS, payload};
};

const productDetailsFailure = payload => {
  return {type: productTypes.PRODUCT_DETAILS_FAILURE, payload};
};

// PRODUCT LIST
export const productList = () => {
  return async dispatch => {
    dispatch(productListRequest());
    return productAPI.list().then(
      response => {
        dispatch(productListSuccess(response));
        return response;
      },
      error => {
        dispatch(productListFailure(error));
        throw error;
      },
    );
  };
};

// PRODUCT DETAIL
export const productDetails = productId => {
  return async dispatch => {
    dispatch(productDetailsRequest());
    return productAPI.details(productId).then(
      response => {
        dispatch(productDetailsSuccess(response));
        return response;
      },
      error => {
        dispatch(productDetailsFailure(error));
        throw error;
      },
    );
  };
};
