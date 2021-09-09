import axios from 'axios';
import { BASE_URL } from '../constants';

// import {addInterceptorRequest, addInterceptorResponse} from './interceptors';

const client = axios.create({
  baseURL: BASE_URL,
});

// addInterceptorRequest(client);
// addInterceptorResponse(client);

export default client;
