import {combineReducers} from 'redux';

import authReducer from './auth';
import appReducer from './app';
export const rootReducer = combineReducers({
  authReducer,
  appReducer,
});
