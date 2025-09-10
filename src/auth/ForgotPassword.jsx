import React, { useState } from "react";
import forget from "../assets/forget.png";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../services/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await forgotPassword(email);
      navigate("/gmail"); // success page
    } catch (err) {
      setError(err.response?.data?.detail || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-between flex-col">
      <div className="bg-white p-8 w-full max-w-md mx-auto text-center">
        {/* Illustration */}
        <div className="mb-6">
          <img
            src={forget}
            alt="Forgot Password"
            className="mx-auto h-40 w-40"
          />
        </div>

        {/* Title and Description */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Forgot your password
        </h1>
        <p className="mb-6">
          Please enter your registered email address and we'll send you a link
          to reset your password
        </p>

        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-6">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-[#000000] rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200"
            />
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#11EA53] text-white font-semibold py-2 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200 disabled:opacity-50"
          >
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </form>
      </div>
      <div className="mb-6 mt-12 text-center">
        <div className="mb-8">
          New Member{" "}
          <a href="/get-started" className="text-[#11EA53] hover:underline">
            Get Started
          </a>
        </div>
        <div className="space-x-8 flex text-sm text-gray-600">
          <p>&copy; 2025 ADMS</p>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
