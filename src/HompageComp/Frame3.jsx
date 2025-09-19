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
    text: "Built a secure scalable payment platform that processes $10M+ monthly transactions",
    stats: [
      { icon: antDesign, label: "200% growth" },
      { icon: mingCuteTime, label: "4 months" },
    ],
  },
  {
    img: cardpic3,
    title: "E-Learning Platform",
    text: "Built a secure scalable payment platform that processes $10M+ monthly transactions",
    stats: [
      { icon: primeCheck, label: "95% satisfactory" },
      { icon: mingCuteTime, label: "8 months" },
    ],
  },
];

export default function Frame3() {
  return (
    <div id="frame3">
      <h1>Our Success Story</h1>
      <p id = "p">
        See how we’ve helped businesses across industries achieve their digital
        transformation goals.
      </p>
      <div id="card2">
        {stories.map((story, i) => (
          <div id={`card-${i + 1}`} key={i}>
            <img src={story.img} alt={story.title} />
            <h2>{story.title}</h2>
            <p>{story.text}</p>
            <div id="grouped-icons">
              {story.stats.map((s, j) => (
                <div id={`grouped-icon${j + 1}`} key={j}>
                  <img src={s.icon} alt={s.label} />
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
            <button>View Case Study</button>
          </div>
        ))}
      </div>
    </div>
  );
}
