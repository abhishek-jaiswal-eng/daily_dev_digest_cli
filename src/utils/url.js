// src/utils/axios.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 10000,
})

// Optional: Add interceptors (e.g. for auth)
axiosInstance.interceptors.request.use(
  config => {
    // Example: Include auth token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['token'] = token
    }
    return config
  },
  error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // You can handle global errors here (e.g., redirect to login)
    return Promise.reject(error)
  }
)

export default axiosInstance
