import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router";

interface ErrorResponse {
  errorCode?: string
}

const axiosInstance = axios.create({
  baseURL: 'http://43.203.203.202:8000/v1',
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`)
  }
  return config
})

export const setupAxiosInterceptor = (
  navigate: ReturnType<typeof useNavigate>
) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorResponse>) => {
      if (
        error.response?.status === 401
      ) {
        navigate('/login')
      }
      return Promise.reject(error)
    }
  )
}

export default axiosInstance