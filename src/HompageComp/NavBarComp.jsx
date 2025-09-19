import React from "react";
import "./notLoggedIn.css";
import webLogo from "../assets/webLogo.png";
import switchMode from "../assets/switchMode.png";

export default function NavBarComp() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  m-3 ms-5">
      <div className="container-fluid me-5">
        <a className="navbar-brand" href="#">
          <img src={webLogo} alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              "Home",
              "About Us",
              "Products",
              "Blogs",
              "Services",
              "Contacts",
            ].map((item, i) => (
              <li key={i} className="nav-item ps-2">
                <a className={`nav-link ${i === 0 ? "active" : ""}`} href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <img className="imgSwitch" src={switchMode} alt="switch mode" />
          <div className="btns">
            <button className="nav-btn" type="button">
              Get Started
            </button>
            <button className="nav-btn" type="button">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
