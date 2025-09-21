import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  withCredentials: false,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      
      try {
        const refreshToken = localStorage.getItem('refresh')
        if (refreshToken) {
          const response = await axios.post('/api/auth/token/refresh/', {
            refresh: refreshToken
          }, {
            baseURL: '/api',
            withCredentials: false
          })
          
          const newAccessToken = response.data.access
          localStorage.setItem('access', newAccessToken)
          
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
          return api(originalRequest)
        }
      } catch (refreshError) {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        localStorage.removeItem('user')
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)

export default api