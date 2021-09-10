import {combineReducers} from 'redux';

import authReducer from './auth';
import appReducer from './app';
import productReducer from './product';

export const rootReducer = combineReducers({
  authReducer,
  appReducer,
  productReducer,
});
