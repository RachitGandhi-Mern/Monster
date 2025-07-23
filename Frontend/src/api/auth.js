import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  withCredentials: true,
});

export const signup =async (formData) => {const res = await API.post("/signup", formData);return res.data;};
export const login = (formData) => API.post('/login', formData);
export const logout = () => API.get('/logout');
export const getUser = () => API.get('/user');
