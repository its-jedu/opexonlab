import React from "react";
import "./notLoggedIn.css";
import webLogo from "../assets/webLogo.png";
import switchMode from "../assets/switchMode.png";

export default function NavBarComp() {
  return (
    <nav className="flex items-center justify-between mx-5 my-3 md:mx-10">
      <a href="#" className="flex items-center">
        <img src={webLogo} alt="logo" className="h-10 md:h-12" />
      </a>

      <button
        className="md:hidden text-gray-700 focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div
        className="hidden md:flex items-center justify-between w-full"
        id="navbarSupportedContent"
      >
        <ul className="flex space-x-4 text-gray-700">
          {[
            "Home",
            "About Us",
            "Products",
            "Blogs",
            "Services",
            "Contacts",
          ].map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className={`text-sm md:text-base hover:text-green-600 ${
                  i === 0 ? "text-green-600 font-semibold" : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-2">
          <img src={switchMode} alt="switch mode" className="h-6 mr-4" />
          <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700">
            Get Started
          </button>
          <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700">
            Login
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden hidden flex-col items-center w-full absolute top-16 left-0 bg-white shadow-lg p-4"
        id="navbarSupportedContent"
      >
        <ul className="flex flex-col space-y-2 text-gray-700 w-full text-center">
          {[
            "Home",
            "About Us",
            "Products",
            "Blogs",
            "Services",
            "Contacts",
          ].map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className={`text-sm hover:text-green-600 ${
                  i === 0 ? "text-green-600 font-semibold" : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-2 mt-4 w-full">
          <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700 w-full">
            Get Started
          </button>
          <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700 w-full">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
