import React from "react";

const About = () => {
  const features = [
    {
      title: "Our Vision",
      text: "To be the global leader in innovative technology solutions, empowering businesses to thrive in the digital age through cutting-edge software, AI-driven insights, and transformative digital experiences.",
    },
    {
      title: "Our Mission",
      text: "To deliver exceptional technology solutions that solve complex business challenges, drive growth, and create lasting value for our clients through innovation, expertise, and unwavering commitment to excellence",
    },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div className="max-w-7xl py-4 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-gray-200 rounded-lg p-4 sm:p-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black text-center mx-auto max-w-4xl mb-3 leading-tight">
            About Opexonlab
          </h1>
          <p className="text-[#4B4B4B] mx-auto max-w-3xl text-base sm:text-lg md:text-[18px] text-center leading-relaxed mb-8 w-full">
            We are a forward-thinking technology company dedicated to
            transforming businesses through innovative digital solutions and
            cutting-edge technology.
          </p>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
