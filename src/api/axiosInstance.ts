import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://43.203.203.202:8000/v1',
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
})

export default axiosInstance