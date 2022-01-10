import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';

export const api = axios.create({
  baseURL: isProduction ? 'https://thoughts-5g.herokuapp.com/api' : 'http://localhost:4000/api',
});
