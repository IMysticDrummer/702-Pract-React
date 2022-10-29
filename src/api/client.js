'use strict';
import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  //baseURL: 'http://localhost:3001/api',
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.data,
      status: error.status,
      ...error.response,
      ...error.response.data,
    });
  }
);

export const setAuthorizationHeader = (token) => {
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default client;
