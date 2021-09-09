import client from './client';
import {
  LoginError
} from './error/auth';
// import { normalizeSession } from './mapper/auth';

// Login
export const login = (email, password) => {
  return client
    .post(
      '/api/auth/login',
      {},
      {
        auth: {
          username: email,
          password: password,
        },
      },
    )
    .then(
      response => {
        // return normalizeSession(response.data);
      },
      error => {
        // throw new LoginError(error);
        return {
          accessToken: "token",
          refreshToken: "refresh",
          expirationTime: 20000000
        }
      },
    );
};
