import React from "react";
import "./notLoggedIn.css";
import cardpic1 from "../assets/card1Pic.png";
import cardpic2 from "../assets/card1Pic2.png";
import cardpic3 from "../assets/card1Pic3.png";
import primeCheck from "../assets/prime_check-circle.png";
import mingCuteTime from "../assets/mingcute_time-line.png";
import antDesign from "../assets/ant-design_rise-outlined.png";

const stories = [
  {
    img: cardpic1,
    title: "Payment Processing Platform",
    text: "Built a secure scalable payment platform that processes $10M+ monthly transactions",
    stats: [
      { icon: primeCheck, label: "200% growth" },
      { icon: mingCuteTime, label: "4 months" },
    ],
  },
  {
    img: cardpic2,
    title: "Telemedicine Platform",
    text: "Developed a secure telemedicine platform for seamless virtual healthcare delivery",
    stats: [
      { icon: antDesign, label: "200% growth" },
      { icon: mingCuteTime, label: "4 months" },
    ],
  },
  {
    img: cardpic3,
    title: "E-Learning Platform",
    text: "Created an interactive e-learning platform to enhance educational access",
    stats: [
      { icon: primeCheck, label: "95% satisfactory" },
      { icon: mingCuteTime, label: "8 months" },
    ],
  },
];

export default function Frame3() {
  return (
    <div className="px-4 sm:px-6 lg:px-8  py-12 w-full">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Our Success Story
      </h1>
      <p className="text-lg md:text-2xl text-[#4B4B4B] leading-7 text-center mt-2 w-full md:w-4/5 mx-auto">
        See how we’ve helped businesses across industries achieve their digital
        transformation goals.
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-8 gap-4">
        {stories.map((story, i) => (
          <div
            key={i}
            className={`border-2 border-[#38A109] shadow-md w-full md:w-1/3 ${
              i === 0 ? "rounded-tl-3xl" : i === 2 ? "rounded-tr-3xl" : ""
            }`}
          >
            <img src={story.img} alt={story.title} className="w-full h-auto" />
            <h2 className="text-lg md:text-xl font-semibold mt-4 mx-4">
              {story.title}
            </h2>
            <p className="text-sm md:text-base text-[#4B4B4B] md:w-[70%] leading-6 mt-2 px-4">
              {story.text}
            </p>
            <div className="flex flex-col md:flex-row mt-4 mx-2 gap-4">
              {story.stats.map((s, j) => (
                <div key={j} className="flex items-center">
                  <img src={s.icon} alt={s.label} className="w-6 h-6" />
                  <p className="text-xs font-medium ml-2">{s.label}</p>
                </div>
              ))}
            </div>
            <button className="border border-[#38A109] text-[#38A109] px-4 py-2 rounded-lg text-sm font-roboto w-11/12 mx-auto my-4 block">
              View Case Study
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
