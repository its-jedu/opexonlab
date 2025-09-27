import React from "react";
import shero from "../assets/team.png";

const Team = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl py-4 mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-16 h-full">
        <div className="flex w-full md:w-2/3 flex-col justify-center h-full">
          <div className="w-full mb-6 sm:mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black text-center md:text-left mb-4 sm:mb-6 leading-tight">
              Meet the Team
            </h1>
            <p className="text-[#4B4B4B] text-base sm:text-lg md:text-[22px] text-center md:text-left leading-relaxed mb-8 w-full">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="w-full h-80 sm:h-96 md:h-110 rounded-2xl overflow-hidden">
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

export default Team;
