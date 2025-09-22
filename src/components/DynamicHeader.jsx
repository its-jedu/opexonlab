import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { logout as logoutService } from "../services/auth";
import logo from "../assets/headlogo.png";

const DynamicHeader = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutService();
      logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="bg-[#11EA53]">
      <div className="max-w-7xl py-4 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>

          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-black">Welcome, {user.username}!</span>
              <button
                onClick={handleLogout}
                className="bg-[#D9D9D9] text-[#000000] px-4 py-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/get-started"
              className="bg-[#D9D9D9] text-[#000000] px-4 py-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicHeader;