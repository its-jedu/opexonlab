import React from "react";

const Chero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl py-4 mx-auto w-full  flex flex-col md:flex-row items-center gap-8 md:gap-16 h-full">
        <div className="w-full mb-8 md:mb-0 text-left">
          {/* Main Heading */}
          <h1 className="text-6xl font-semibold text-black text-center mx-auto max-w-4xl mb-6 leading-tight">
            Let’s Build Something
            <span className="text-[#38A109] inline-block">
              Amazing Together
            </span>
          </h1>

          {/* Description Text */}
          <p className="text-[#000000] text-[22px] text-center  leading-relaxed mb-8 m w-full">
            Have a project in mind? Want to learn more about our solutions? We’d
            love to hear from you. Reach out and let’s start the conversation.
          </p>

          {/* Features List */}
        </div>
      </div>
    </div>
  );
};

export default Chero;
