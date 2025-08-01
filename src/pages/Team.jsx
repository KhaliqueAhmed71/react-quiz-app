// Team.jsx
import React from "react";
import { Link } from "react-router-dom";
import teamMembers from "../data/TeamData";
import Header from "../components/Header";

/**
 * Card component for a single team member.
 */
const TeamCard = ({ name, role, imageUrl }) => {
  return (
    <div
      className="bg-white border border-gray-200 shadow-md p-3 max-w-[300px] flex flex-col items-center transition-transform duration-100 hover:shadow-xl hover:scale-[1.01]"
      style={{
        fontFamily: "'Nunito', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div className="w-full aspect-square bg-[#d9d9d9] mb-4 flex-shrink-0 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
      <div className="text-center">
        <div className="text-sm font-bold text-black tracking-wide">{name}</div>
        <div className="text-xs text-gray-500 uppercase mt-2">{role}</div>
      </div>
    </div>
  );
};

/**
 * Team grid display.
 */
const Team = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header
        PageName={"OUR CHEF"}
        PageDetail={"HOME / OUR CHEF"}
        Honed={"TEAM EXPERT"}
      />
      <div className="max-w-6xl mx-auto py-25 px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-item-center">
          {teamMembers.map((member, idx) => (
            <Link to={`/team/${member.id}`} key={idx} className="no-underline">
              <TeamCard
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
