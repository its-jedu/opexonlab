import React from "react";
import "./notLoggedIn.css";
import frame1Pic from "../assets/frame1.png";

export default function Frame1() {
  return (
    <div id="frame1">
      <div className="F-frame1">
        <h1>Building Tomorrow’s</h1>
        <h1 className="h1">Technology Today</h1>
        <p>
          At Opexonlab, we create innovative solutions that transform
          industries. From fintech to healthcare, we’re pioneering the
          technologies that shape the future
        </p>
        <button>See Our Works</button>
      </div>
      <div>
        <img src={frame1Pic} />
      </div>
    </div>
  );
}
