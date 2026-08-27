import axios from 'axios';
export const API_URL=import.meta.env.VITE_API_URL||'http://localhost:5000/api';
export const api=axios.create({baseURL:API_URL});
api.interceptors.request.use(config=>{const token=localStorage.getItem('marketly_token');if(token)config.headers.Authorization=`Bearer ${token}`;return config});
export async function login(data){const r=await api.post('/auth/login',data);localStorage.setItem('marketly_token',r.data.token);localStorage.setItem('marketly_user',JSON.stringify(r.data.user));return r.data}
export async function register(data){const r=await api.post('/auth/register',data);localStorage.setItem('marketly_token',r.data.token);localStorage.setItem('marketly_user',JSON.stringify(r.data.user));return r.data}
export function logout(){localStorage.removeItem('marketly_token');localStorage.removeItem('marketly_user')}
