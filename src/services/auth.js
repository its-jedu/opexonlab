import api from '../lib/api'

export const register = (payload) =>
  api.post('/auth/register/', payload).then(r => r.data)

export const login = async ({ emailOrUsername, password }) => {
  const { data } = await api.post('/auth/login/', {
    email_or_username: emailOrUsername,
    password,
  })
  localStorage.setItem('access', data.tokens.access)
  localStorage.setItem('refresh', data.tokens.refresh)
  localStorage.setItem('user', JSON.stringify(data.user))
  return data
}

export const me = () => api.get('/auth/me/').then(r => r.data)

export const logout = async () => {
  try { await api.post('/auth/logout/') } catch {}
  localStorage.removeItem('access')
  localStorage.removeItem('refresh')
  localStorage.removeItem('user')
}

export const forgotPassword = (email) =>
  api.post('/auth/forgot-password/', { email }).then(r => r.data)

export const resetPassword = (uid, token, newPassword) =>
  api.post('/auth/reset-password/', { uid, token, new_password: newPassword }).then(r => r.data)
