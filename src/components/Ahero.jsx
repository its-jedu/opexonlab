import React from "react";
import ahero from "../assets/alogo.png";
import { CheckCircle, Globe, Users } from "lucide-react";

const Ahero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-xl py-4 mx-auto w-full flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-16 h-full">
        <div className="flex w-full flex-col justify-center h-full">
          <div className="w-full text-center md:text-left">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 items-center justify-center md:justify-start">
              <img
                src={ahero}
                alt="Ahero"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black text-center md:text-left mb-4 sm:mb-6 leading-tight">
                Opexonlab
              </h1>
            </div>
            <p className="text-[#7F7F7F] text-base sm:text-lg md:text-lg text-center md:text-left leading-relaxed mb-2 w-full">
              At Opexonlab, we transform innovative ideas into cutting-edge
              technology solutions that drive business growth and shape the
              digital landscape of tomorrow.
            </p>
            <div className="space-y-3 sm:space-y-0 flex w-full flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-3 sm:gap-6 text-[#7F7F7F]">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#38A109] flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  50+ Projects Delivered
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#38A109] flex-shrink-0" />
                <span className="text-sm sm:text-base">Expert Team</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#38A109] flex-shrink-0" />
                <span className="text-sm sm:text-base">Global Reach</span>
              </div>
            </div>
            <div className="w-full flex justify-center ">
              <button className="mt-4 sm:mt-6 mx-auto md:mx-0 px-6 sm:px-8 font-medium py-2 sm:py-3 bg-[#38A109] text-white rounded-lg hover:bg-green-600 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ahero;
