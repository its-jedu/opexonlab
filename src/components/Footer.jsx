import React from "react";
import "../HompageComp/notLoggedIn.css";
import webLogo from "../assets/webLogo.png";
import arrowRight from "../assets/flowbite_arrow-right-outline.png";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#11EA53] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full font-roboto">
      {/* CTA Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
          Ready To Transform Your Business?
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-3 sm:mt-4 px-2 sm:px-4 leading-relaxed">
          Join thousands of companies already using Opexonlab’s solutions to
          drive innovation and growth. Let’s build the future together.
        </p>
        <button className="bg-white text-green-600 border border-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg font-roboto mt-4 sm:mt-6 flex items-center justify-center mx-auto hover:bg-green-50 hover:shadow-md transition-all duration-300">
          Hire Us
          <img src={arrowRight} alt="Arrow Right" className="w-5 h-5 ml-2" />
        </button>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row justify-between mx-auto mt-6 sm:mt-8 gap-6 sm:gap-8 max-w-7xl">
        {/* Logo and Description */}
        <div className="w-full sm:w-1/3 md:w-1/4 text-center sm:text-left">
          <a href="#" aria-label="Opexonlab Home">
            <img
              src={webLogo}
              alt="Opexonlab Logo"
              className="w-28 sm:w-32 mx-auto sm:mx-0"
            />
          </a>
          <p className="text-gray-700 text-sm sm:text-base leading-6 mt-3 sm:mt-4">
            Building the future with technological advancements for fintech,
            healthtech, and edtech companies.
          </p>
        </div>

        {/* Product and Get in Touch */}
        <div className="flex flex-col sm:flex-row w-full sm:w-2/3 md:w-1/2 gap-6 sm:gap-8">
          <div className="w-full sm:w-1/2">
            <ul
              className="text-center sm:text-left"
              role="navigation"
              aria-label="Product Links"
            >
              <li className="text-lg sm:text-xl font-bold text-black">
                <a href="#" aria-label="Product Overview">
                  Product
                </a>
              </li>
              {[
                "Fintech Solutions",
                "Edtech Solutions",
                "Healthtech Solutions",
              ].map((item, i) => (
                <li key={i} className="mt-2">
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
                    aria-label={item}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <ul
              className="text-center sm:text-left"
              role="navigation"
              aria-label="Contact Links"
            >
              <li className="text-lg sm:text-xl font-bold text-black">
                <a href="#" aria-label="Get in Touch">
                  Get in Touch
                </a>
              </li>
              {["+ (123) 456-7890", "opexonlab@gmail.com"].map((item, i) => (
                <li key={i} className="mt-2">
                  <a
                    href={
                      i === 0 ? "tel:+1234567890" : "mailto:opexonlab@gmail.com"
                    }
                    className="text-sm sm:text-base text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
                    aria-label={item}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company */}
        <div className="w-full sm:w-1/3 md:w-1/4 mt-4 sm:mt-0">
          <ul
            className="text-center sm:text-left"
            role="navigation"
            aria-label="Company Links"
          >
            <li className="text-lg sm:text-xl font-bold text-black">
              <a href="#" aria-label="Company Overview">
                Company
              </a>
            </li>
            {["About Us", "Career", "Blog", "Contact"].map((item, i) => (
              <li key={i} className="mt-2">
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
                  aria-label={item}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="w-full sm:w-1/3 md:w-1/4 mt-4 sm:mt-0">
          <ul
            className="text-center sm:text-left"
            role="navigation"
            aria-label="Resources Links"
          >
            <li className="text-lg sm:text-xl font-bold text-black">
              <a href="#" aria-label="Resources Overview">
                Resources
              </a>
            </li>
            {[
              "Documentation",
              "Support",
              "Privacy Policy",
              "Terms of Service",
            ].map((item, i) => (
              <li key={i} className="mt-2">
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
                  aria-label={item}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-400 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-700 hover:text-green-600 transition-colors duration-200"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-700 hover:text-green-600 transition-colors duration-200"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-green-600 transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-gray-700">
          &copy; {new Date().getFullYear()} Opexonlab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
