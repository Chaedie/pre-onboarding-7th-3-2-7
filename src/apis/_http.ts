import axios from 'axios';
import { getToken } from '../utils/functions';

export const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000,
});

http.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }
  return config;
});
