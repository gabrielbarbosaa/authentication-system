import axios from 'axios';

const instance  = axios.create({
  baseURL: '/api',
});

export const api = instance;