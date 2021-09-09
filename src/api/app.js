import client from './client';
import {AppMenuError} from './error/app';

export const appMenu = async () => {
  return client.get('/benirvingplt/products/menu',).then(
    response => {
      return response;
    },
    error => {
      throw new AppMenuError(error);
    },
  );
};
