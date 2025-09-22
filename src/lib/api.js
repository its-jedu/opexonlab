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

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      
      try {
        const refreshToken = localStorage.getItem('refresh')
        if (refreshToken) {
          const response = await api.post('/auth/token/refresh/', {
            refresh: refreshToken
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
        delete api.defaults.headers.common['Authorization']
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)

export default api