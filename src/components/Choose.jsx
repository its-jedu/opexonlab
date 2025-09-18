import React from "react";
import { Clock, TrendingUp, Rocket, CheckCircle } from "lucide-react";

const features = [
  {
    title: "Save Time",
    description:
      "Streamline your operations with automated workflows and efficient systems that eliminate manual processes and reduce time to market.",
    icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-black" />,
    bgColor: "bg-[#38A109]",
    benefits: [
      { text: "70% faster deployment" },
      { text: "Automated workflows" },
    ],
  },
  {
    title: "Scale Faster",
    description:
      "Build on cloud-native architectures and scalable solutions designed to grow with your business and handle increasing demands.",
    icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-black" />,
    bgColor: "bg-[#11EA53]",
    benefits: [
      { text: "Cloud-native solutions" },
      { text: "Auto-scaling infrastructure" },
    ],
  },
  {
    title: "Stay Ahead",
    description:
      "Leverage cutting-edge technologies and industry best practices to maintain competitive advantage and drive innovation.",
    icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-black" />,
    bgColor: "bg-[#38A109]",
    benefits: [
      { text: "Latest tech stack" },
      { text: "Future-ready solutions" },
    ],
  },
];

const Choose = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl py-8 sm:py-12 md:py-16 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Why Choose Opexonlab?
          </h2>
          <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Partner with us to unlock your business potential and achieve
            measurable results through technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-black text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="space-y-2 sm:space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-2 sm:gap-3"
                  >
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
