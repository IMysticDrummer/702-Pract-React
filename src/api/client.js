'use strict';
import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  //baseURL: 'http://localhost:3001/api',
});

client.interceptors.response.use((response) => response.data);

export const setAuthorizationHeader = (token) =>
  (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTAzZjk4Zi0zZTVmLTQ4NzMtYWRiMy00YmRmYzZkMWFkOWUiLCJpYXQiOjE2NjY5OTE5NDcsImV4cCI6MTY5ODU0OTU0N30.KzhFsxCjC_3s0iH96C155R7rqycwOn0zH9cviGabr6k';

client.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default client;
