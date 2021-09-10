import {combineReducers} from 'redux';

import authReducer from './auth';
import appReducer from './app';
import productReducer from './product';
import bagReducer from './bag';

export const rootReducer = combineReducers({
  authReducer,
  appReducer,
  productReducer,
  bagReducer,
});
