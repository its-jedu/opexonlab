import React from "react";
import teams from "../assets/teams.png";

const teamMembers = [
  {
    name: "Olajide Kosoko",
    position: "CEO & Founder",
    text: "10+ years in tech leadership and innovation.",
    image: teams,
  },
  {
    name: "Olajide Kosoko",
    position: "CEO & Founder",
    text: "10+ years in tech leadership and innovation.",
    image: teams,
  },
  {
    name: "Olajide Kosoko",
    position: "CEO & Founder",
    text: "10+ years in tech leadership and innovation.",
    image: teams,
  },
  {
    name: "Olajide Kosoko",
    position: "CEO & Founder",
    text: "10+ years in tech leadership and innovation.",
    image: teams,
  },
  {
    name: "Olajide Kosoko",
    position: "CEO & Founder",
    text: "10+ years in tech leadership and innovation.",
    image: teams,
  },
];

const Teams = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div className="max-w-7xl py-4 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border-[2px] border-[#38A109] rounded-lg p-6 sm:p-8 text-center flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-2 object-cover"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base font-medium mb-6 sm:mb-8">
                {member.position}
              </p>
              <div className="max-w-[180px] sm:max-w-[200px] mx-auto">
                <p className="text-gray-900 text-sm sm:text-base text-center">
                  {member.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
