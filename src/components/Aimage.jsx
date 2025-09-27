import React from "react";
import about from "../assets/about.png";

const Aimage = () => {
  const items = [
    { text: "AI-Powered Solutions", color: "bg-[#11EA53]" },
    { text: "Cloud-First Architecture", color: "bg-[#38A109]" },
    { text: "Scalable Infrastructure", color: "bg-[#11EA53]" },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div className="max-w-7xl py-4 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-gray-200 rounded-lg p-4 sm:p-6">
          <img
            src={about}
            alt="About"
            className="w-full h-64 sm:h-80 md:h-96 object-cover object-top rounded-md"
          />
          <div className="space-y-3 mt-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${item.color}`}
                ></div>
                <span className="text-sm sm:text-base font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aimage;
