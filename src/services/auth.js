import api from "../lib/api";

// Register
export const register = (payload) =>
  api.post("/auth/register/", payload).then((r) => r.data);
export const login = async ({ emailOrUsername, password }) => {
  const payload = {
    emailOrUsername: emailOrUsername,
    password: password,
  };

  const { data } = await api.post("/auth/login/", payload);

  // Save tokens and user in localStorage
  localStorage.setItem("access", data.tokens.access);
  localStorage.setItem("refresh", data.tokens.refresh);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data;
};

// Current user
export const me = () => api.get("/auth/me/").then((r) => r.data);

// Logout
export const logout = async () => {
  try {
    await api.post("/auth/logout/");
  } catch (err) {

  }
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("user");
};

// Forgot password
export const forgotPassword = (email) =>
  api.post("/auth/forgot-password/", { email }).then((r) => r.data);

// Reset password
export const resetPassword = (uid, token, newPassword) =>
  api
    .post("/auth/reset-password/", {
      uid,
      token,
      new_password: newPassword,
    })
    .then((r) => r.data);

export const initializeAuth = () => {
  const token = localStorage.getItem('access');
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

initializeAuth();