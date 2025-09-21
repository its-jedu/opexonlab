import React from "react";
import "./notLoggedIn.css";
// import NavBarComp from "./NavBarComp";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";
import Frame4 from "./Frame4";
// import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div id="body">
      {/* <NavBarComp /> */}
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      {/* <Footer /> */}
    </div>
  );
}
