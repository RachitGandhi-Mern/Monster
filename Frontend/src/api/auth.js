import axios from 'axios';

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/auth`,
  withCredentials: true,
});

export const signup =async (formData) => {const res = await API.post("/signup", formData);return res.data;};
export const login = (formData) => API.post('/login', formData);
export const logout = () => API.get('/logout');
export const getUser = () => API.get('/user');
