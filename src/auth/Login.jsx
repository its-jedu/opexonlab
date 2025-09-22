import React, { useState } from "react";
import auth from "../assets/auth.png";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth";

const Login = () => {
  const [identifier, setIdentifier] = useState(""); // email or username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!identifier || !password) {
    setError("All fields are required");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const payload = {
      emailOrUsername: identifier,
      password: password,
    };

    const result = await login(payload);
    
    navigate("/");
    
  } catch (err) {
    console.error("Login error:", err);
    
    if (err.response?.status === 401) {
      setError("Invalid credentials");
    } else if (err.response?.data?.detail) {
      setError(err.response.data.detail);
    } else {
      setError("Login failed. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-between flex-col">
      <div className="bg-white p-8 w-full max-w-md mx-auto">
        {/* Logo and Title */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-black">OPEXONLAB</h1>
          <img src={auth} alt="Auth" className="mx-auto h-30 w-30" />
        </div>

        {/* Input Fields */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Email or Username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#D9D9D9] rounded-full focus:outline-none focus:ring-2 focus:ring-[#11EA53] transition duration-200"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              required
              className="w-full px-4 py-2 bg-[#D9D9D9] rounded-full focus:outline-none focus:ring-2 focus:ring-[#11EA53] transition duration-200"
            />
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#11EA53] text-black py-2 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Continue"}
          </button>

          <div className="flex space-x-2 items-center">
            <hr className="flex-1 h-[1px] border-none bg-black" />
            <span className="text-black">or</span>
            <hr className="flex-1 h-[1px] border-none bg-black" />
          </div>

          {/* Continue with Gmail */}
          <Link to="/gmail">
            <button
              type="button"
              className="w-full px-4 py-2 bg-[#D9D9D9] rounded-full focus:outline-none focus:ring-2 focus:ring-[#11EA53] transition duration-200"
            >
              Continue with Gmail
            </button>
          </Link>

          <div className="flex justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            <Link to="/forgot-password" className="text-[#11EA53] hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>

      {/* Footer Links */}
      <div className="mb-6 mt-12 text-center">
        <div className="mb-8">
          New Member{" "}
          <Link to="/get-started" className="text-[#11EA53] hover:underline">
            Get Started
          </Link>
        </div>
        <div className="space-x-8 flex text-sm text-gray-600">
          <p>&copy; 2025 ADMS</p>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default Login;