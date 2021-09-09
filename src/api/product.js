import client from './client';
import {ProductDetailError, ProductListError} from './error/product';

export const list = async () => {
  return client.get('/benirvingplt/products/products').then(
    response => {
      return response;
    },
    error => {
      throw new ProductListError(error);
    },
  );
};

export const details = async productId => {
  return client.get(`/benirvingplt/products/products/${productId}`).then(
    response => {
      return response;
    },
    error => {
      throw new ProductDetailError(error);
    },
  );
};
