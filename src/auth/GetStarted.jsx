import React, { useState } from "react";
import auth from "../assets/auth.png";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/auth";

const GetStarted = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // reset errors
    setError("");
    setFieldErrors({ username: "", email: "", password: "" });

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await register({ username, email, password });
      navigate("/dashboard");
    } catch (err) {
      const data = err.response?.data || {};

      const fe = {
        username: Array.isArray(data.username) ? data.username[0] : "",
        email: Array.isArray(data.email) ? data.email[0] : "",
        password: Array.isArray(data.password) ? data.password[0] : "",
      };
      setFieldErrors(fe);

      // Generic error (detail / non_field_errors / fallback)
      if (data.detail) setError(data.detail);
      else if (Array.isArray(data.non_field_errors) && data.non_field_errors.length)
        setError(data.non_field_errors[0]);
      else if (!fe.username && !fe.email && !fe.password)
        setError("Failed to register. Please check your input.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-between flex-col">
      <div className="bg-white p-8 w-full max-w-md mx-auto">
        {/* Logo and Title */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-black">Get started in minutes</h1>
          <h1 className="text-sm font-semibold text-black">Free-no payment necessary</h1>
          <img src={auth} alt="Auth" className="mx-auto h-30 w-30" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#D9D9D9] rounded-full focus:outline-none focus:ring-2 focus:ring-[#11EA53] transition duration-200"
            />
            {fieldErrors.username && (
              <p className="text-red-600 text-sm mt-1">{fieldErrors.username}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-[#D9D9D9] rounded-full focus:outline-none focus:ring-2 focus:ring-[#11EA53] transition duration-200"
            />
            {fieldErrors.email && (
              <p className="text-red-600 text-sm mt-1">{fieldErrors.email}</p>
            )}
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
            {fieldErrors.password && (
              <p className="text-red-600 text-sm mt-1">{fieldErrors.password}</p>
            )}
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Continue Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#11EA53] text-black py-2 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Continue"}
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
          Already have an account?{" "}
          <Link to="/login" className="text-[#11EA53] hover:underline">
            Login
          </Link>
        </div>
        <div className="space-x-8 flex text-sm text-gray-600">
          <p>&copy; 2025 ADMS</p>
          <a href="#" className="hover:underline">Privacy Policy</a>{" "}
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
