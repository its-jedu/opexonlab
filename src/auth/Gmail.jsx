import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { forgotPassword } from "../services/auth";

const Gmail = () => {
  const [timer, setTimer] = useState(59); // 59 seconds countdown
  const [email, setEmail] = useState("");
  const [resendMsg, setResendMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Get email passed from ForgotPassword page (optional)
  useEffect(() => {
    const stateEmail = location.state?.email;
    if (stateEmail) {
      setEmail(stateEmail);
    }
  }, [location.state]);

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleResend = async () => {
    if (timer === 0 && email) {
      setTimer(59); // Reset timer
      setResendMsg("");
      try {
        await forgotPassword(email);
        setResendMsg("A new reset link has been sent to your email.");
      } catch (err) {
        setResendMsg(
          err.response?.data?.detail || "Failed to resend reset link."
        );
      }
    } else if (!email) {
      navigate("/forgot-password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-between flex-col">
      <div className="bg-white p-8 w-full max-w-md mx-auto text-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-black mb-8">LINK SENT</h1>

        {/* Description */}
        <p className="text-base mb-6">
          {email
            ? `A reset link has been sent to ${email}. Please follow the link to reset your password.`
            : "A link has been sent to your email. Please follow the link to reset your password."}
        </p>
        <p className="text-base mb-6">
          Didn&apos;t receive the mail? Click the resend button to request
          another link.
        </p>

        {/* Resend Button with Timer */}
        <button
          onClick={handleResend}
          className="w-fit mx-auto px-6 bg-[#38A109] text-white py-2 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200 disabled:bg-green-400 disabled:cursor-not-allowed"
          disabled={timer > 0}
        >
          Resend Link
        </button>
        {timer > 0 && (
          <p className="text-gray-600 mt-2">
            00:{timer < 10 ? `0${timer}` : timer}
          </p>
        )}
        {resendMsg && (
          <p className="text-sm mt-3 text-green-600">{resendMsg}</p>
        )}
      </div>

      {/* Footer Links */}
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

export default Gmail;
