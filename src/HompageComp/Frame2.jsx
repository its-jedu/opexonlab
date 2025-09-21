import React from "react";
import "./notLoggedIn.css";
import ellipse from "../assets/Ellipse 109.png";

const cards = [
  {
    title: "Product Development",
    text: "Full-stack development of web and mobile applications using modern technologies and best practices.",
  },
  {
    title: "Automation & Process Optimization",
    text: "Streamline your business operations with intelligent automation and optimized workflows.",
  },
  {
    title: "Custom Digital Solutions",
    text: "Tailored software solutions designed specifically for your unique business requirements and goals.",
  },
  {
    title: "Ongoing support",
    text: "Continuous maintenance, updates, and technical support to keep your systems running smoothly.",
  },
];

export default function Frame2() {
  return (
    <div className="px-4 sm:px-6 lg:px-8  py-12 w-full">
      <h1 className="text-3xl md:text-5xl font-bold text-center">What We Do</h1>
      <p className="text-lg md:text-2xl text-[#4B4B4B] leading-7 text-center mt-2 w-full md:w-4/5 mx-auto">
        We specialize in building technology solutions that solve real business
        problems and drive growth.
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-8 gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="border border-green-600 shadow-md p-4 w-full md:w-1/4"
          >
            <img src={ellipse} alt="icon" className="w-10 mx-auto mb-4" />
            <h2 className="text-lg md:text-xl font-semibold h-10 leading-5 text-center">
              {card.title}
            </h2>
            <p className="text-xs md:text-sm text-center text-[#4B4B4B] leading-4 mt-2 px-4">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
