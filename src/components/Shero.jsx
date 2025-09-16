import React from "react";
import shero from "../assets/shero.png";
import { Shield, Calendar, CheckCircle } from "lucide-react";

const Shero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl py-4 mx-auto w-full  flex flex-col md:flex-row items-center gap-8 md:gap-16 h-full">
        {/* Left Content */}
        <div className="flex w-full md:w-2/3 flex-col justify-center h-full">
          <div className="w-full mb-8 md:mb-0 text-left">
            {/* Main Heading */}
            <h1 className="text-6xl font-bold text-black text-center md:text-left mb-6 leading-tight">
              Business Solutions Through{" "}
              <span className="text-[#38A109]">Technology</span>
            </h1>

            {/* Description Text */}
            <p className="text-[#000000] text-[22px] text-center md:text-left leading-relaxed mb-8 w-full">
              We deliver comprehensive technology that transforms your business
              operations, streamline processes, and drive sustainable growth.
              From custom software development to digital transformation
              consulting, we're your trusted technology partner.
            </p>

            {/* Features List */}
            <div className="space-y-3 md:space-y-0 flex w-full md:w-[80%] items-center justify-between flex-col sm:flex-row text-black">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-base font-medium">
                  Enterprise Grade Solutions
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-base font-medium">Secure & Scalable</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-base font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="w-full h-110 rounded-2xl overflow-hidden">
            <img
              src={shero}
              alt="Business Solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shero;
