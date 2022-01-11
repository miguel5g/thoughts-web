import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';
const prodURL = 'https://thoughts-5g.herokuapp.com/api';
const devURL = 'http://localhost:4000/api';

export const api = axios.create({ baseURL: isProduction ? prodURL : devURL });
