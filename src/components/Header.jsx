// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "../assets/headlogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/product", label: "Product" },
    { path: "/blog", label: "Blog" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900  sticky top-0 z-50">
      <div className="max-w-7x py-4 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium  ${
                    isActive
                      ? "text-primary text-black"
                      : "text-[#4B4B4B] dark:text-gray-300 hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark/Light Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="px-6 py-2 text-sm font-medium text-white bg-[#38A109] rounded-full dark:text-gray-300 hover:text-primary"
            >
              Login
            </Link>

            {/* Get Started */}
            <Link
              to="/get-started"
              className="px-6 py-2 text-sm font-medium text-white bg-[#38A109] rounded-full dark:text-gray-300 hover:text-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-primary"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-2 mt-4">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                Login
              </Link>
              <Link
                to="/get-started"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
              >
                Get Started
              </Link>

              {/* Dark/Light Mode */}
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
