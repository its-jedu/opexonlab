import api from "../lib/api";

// Register
export const register = async (payload, authContext = null) => {
  try {
    const response = await api.post("/auth/register/", payload);
    const data = response.data;

    const loginPayload = {
      emailOrUsername: payload.email || payload.username,
      password: payload.password
    };

    const loginResponse = await api.post("/auth/login/", loginPayload);
    const loginData = loginResponse.data;

    if (!loginData || !loginData.tokens) {
      throw new Error("Auto-login failed after registration");
    }

    localStorage.setItem("access", loginData.tokens.access);
    localStorage.setItem("refresh", loginData.tokens.refresh);
    localStorage.setItem("user", JSON.stringify(loginData.user));

    api.defaults.headers.common['Authorization'] = `Bearer ${loginData.tokens.access}`;

    if (authContext && authContext.login) {
      authContext.login(loginData.user);
    }

    return loginData;
    
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// Login
export const login = async ({ emailOrUsername, password }) => {
  const payload = {
    emailOrUsername: emailOrUsername,
    password: password,
  };

  try {
    const response = await api.post("/auth/login/", payload);
    const data = response.data;

    if (!data || !data.tokens) {
      throw new Error("Invalid response from server");
    }

    localStorage.setItem("access", data.tokens.access);
    localStorage.setItem("refresh", data.tokens.refresh);
    localStorage.setItem("user", JSON.stringify(data.user));

    api.defaults.headers.common['Authorization'] = `Bearer ${data.tokens.access}`;

    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Current user
export const me = () => api.get("/auth/me/").then((r) => r.data);

// Logout
export const logout = async (authContext = null) => {
  try {
    await api.post("/auth/logout/");
  } catch (err) {
  } finally {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    delete api.defaults.headers.common['Authorization'];

    if (authContext && typeof authContext === 'function') {
      authContext();
    }
  }
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