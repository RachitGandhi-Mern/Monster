import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
  withCredentials: true,
});

export const signup = (formData) => API.post('/signup', formData);
export const login = (formData) => API.post('/login', formData);
export const logout = () => API.get('/logout');
export const getUser = () => API.get('/user');
