import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router';

interface ErrorResponse {
  errorCode?: string;
}

const sprintAxiosInstance = axios.create({
  baseURL: 'http://43.203.203.202:8081/v1',
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
});

sprintAxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log('Token:', token);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const setupAxiosInterceptor = (
  navigate: ReturnType<typeof useNavigate>
) => {
  sprintAxiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorResponse>) => {
      if (error.response?.status === 401) {
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );
};

export default sprintAxiosInstance;
