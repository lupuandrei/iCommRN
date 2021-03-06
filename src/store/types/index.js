import {APP_MENU_REQUEST} from './app';
import {LOGIN_REQUEST} from './auth';
import {PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_REQUEST} from './product';

export const GLOBAL_LOADING = [
  // APP
  APP_MENU_REQUEST,

  // AUTH
  LOGIN_REQUEST,

  // PRODUCT
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAILS_REQUEST,
];
