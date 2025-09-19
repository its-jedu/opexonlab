import React from "react";
import "./notLoggedIn.css";
import webLogo from "../assets/webLogo.png";
import arrowRight from "../assets/flowbite_arrow-right-outline.png";

export default function Footer() {
  return (
    <footer>
      <div id="footer1">
        <h1>Ready To Transform Your Business?</h1>
        <p>
          Join thousands of companies already using Opexonlab’s solutions to
          drive innovation and growth. Let’s build the future together.
        </p>
        <button id="btn">
          Hire Us <img src={arrowRight} alt="arrow" />
        </button>
      </div>

      <div id="item1">
        <a href="#">
          <img src={webLogo} alt="logo" />
        </a>
        <p>
          Building the future Technological advancements for fintech, healthtech
          and edtech companies.
        </p>
      </div>

      <div id="item-merged">
        <div id="item2">
          <ul>
            <a href="#">Product</a>
            <li>
              <a href="#">Fintech Solutions</a>
            </li>
            <li>
              <a href="#">Edtech Solutions</a>
            </li>
            <li>
              <a href="#">Healthtech Solutions</a>
            </li>
          </ul>
        </div>
        <div id="item3">
          <ul>
            <a href="#">Get in Touch</a>
            <li>
              <a href="#">+ (123) 456-7890</a>
            </li>
            <li>
              <a href="#">opexonlab@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div id="item4">
        <ul>
          <a href="#">Company</a>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div id="item5">
        <ul>
          <a href="#">Resources</a>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
