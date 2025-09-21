import React from "react";
import "./notLoggedIn.css";
import frame1Pic from "../assets/frame1.png";
import { Shield, Calendar, CheckCircle } from "lucide-react";

export default function Frame1() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl py-4 mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 h-full">
        {/* Left Content */}
        <div className="flex w-full md:w-2/3 flex-col justify-center h-full">
          <div className="w-full mb-8 md:mb-0 text-left">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black text-center md:text-left mb-6 leading-tight">
              Building Tomorrow’s Technology Today
            </h1>

            {/* Description Text */}
            <p className="text-[#4B4B4B] text-lg sm:text-[22px] md:text-[25px] text-center md:text-left leading-relaxed mb-8 w-full">
              At Opexonlab, we create innovative solutions that transform
              industries. From fintech to healthcare, we’re pioneering the
              technologies that shape the future.
            </p>

            {/* Features List */}
            <button className="border border-[#38A109] text-[#38A109] px-6 py-3 rounded-lg mt-4">
              See Our Works
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="w-full h-[440px] rounded-2xl overflow-hidden">
            <img
              src={frame1Pic}
              alt="Business Solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
