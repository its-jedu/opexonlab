import React from "react";
import "./notLoggedIn.css";

export default function Frame4() {
  return (
    <div className="px-4 sm:px-6 lg:px-8  py-12 w-full font-roboto">
      <h1 className="text-3xl md:text-5xl font-bold text-left">
        Our Mission & Vision
      </h1>
      <p className="text-lg md:text-2xl text-[#4B4B4B] leading-7 text-left mt-4">
        We believe technology should solve real-world problems and create
        meaningful impact. Our mission is to develop innovative solutions that
        empower business and individuals to achieve their full potential.
      </p>
      <p className="text-lg md:text-2xl text-[#4B4B4B] leading-7 text-left mt-2">
        By combining cutting-edge technology with human-centered design, we’re
        building a future where technology serves humanity’s greatest needs.
      </p>
      <div className="mt-8 space-y-4">
        <div className="border border-[#4B4B4B] p-4">
          <h1 className="text-2xl md:text-4xl font-bold">Innovation</h1>
          <p className="text-lg md:text-xl text-[#4B4B4B]">
            Pushing boundaries with cutting-edge technology solutions
          </p>
        </div>
        <div className="border border-[#4B4B4B] p-4">
          <h1 className="text-2xl md:text-4xl font-bold">Security</h1>
          <p className="text-lg md:text-xl text-[#4B4B4B]">
            Enterprise-grade security built into every solution
          </p>
        </div>
        <div className="border border-[#4B4B4B] p-4">
          <h1 className="text-2xl md:text-4xl font-bold">Global Impact</h1>
          <p className="text-lg md:text-xl text-[#4B4B4B]">
            Creating solutions that scale across continents
          </p>
        </div>
      </div>
    </div>
  );
}
