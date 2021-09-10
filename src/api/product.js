import client from './client';
import {ProductDetailError, ProductListError} from './error/product';
import {normalizeProduct} from './mapper/product';

export const list = async () => {
  return client.get('/benirvingplt/products/products').then(
    response => {
      return response.data.map(product => normalizeProduct(product));
    },
    error => {
      throw new ProductListError(error);
    },
  );
};

export const details = async productId => {
  return client.get(`/benirvingplt/products/products/${productId}`).then(
    response => {
      return normalizeProduct(response.data);
    },
    error => {
      throw new ProductDetailError(error);
    },
  );
};
