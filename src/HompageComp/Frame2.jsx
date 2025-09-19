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
    <div id="frame2">
      <h1>What We Do</h1>
      <p id = "p">
        We specialize in building technology solutions that solve real business
        problems and drive growth.
      </p>
      <div id="card1">
        {cards.map((card, i) => (
          <div id="cards" key={i}>
            <img src={ellipse} alt="icon" />
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
