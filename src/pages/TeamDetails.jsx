import React from "react";
import { useParams, Navigate } from "react-router-dom";
import teamMembers from "../data/TeamData";
import Header from "../components/Header";

const InfoCell = ({ label, value, iconClass }) => (
  <div className="flex items-center gap-4 px-4 py-5">
    <div className="w-10 h-10 flex items-center justify-center rounded-full text-[#cb3a1a] bg-white text-lg">
      <i className={iconClass}></i>
    </div>
    <div>
      <div className="text-gray-500 text-xs font-semibold">{label}</div>
      <div className="text-sm font-medium text-gray-800">{value}</div>
    </div>
  </div>
);

const TeamDetails = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id.toString() === id);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

  const {
    name,
    role,
    imageUrl,
    bio,
    experience,
    email,
    phone,
    fax,
  } = member;

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header
        PageName={"CHEF DETAILS"}
        PageDetail={"HOME / CHEF DETAILS"}
        Honed={"TEAM EXPERT"}
      />

      <div className="min-h-screen py-25 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-[#f6f6f6] p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-10">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>
              {name}
            </h1>
            <div className="text-sm text-[#cb3a1a] font-semibold mb-6">{role}</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">{bio}</p>

            {/* Info Grid Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-b divide-y sm:divide-y-0 divide-gray-300 border-gray-300 mb-8">
              <div className="sm:border-r border-gray-300">
                <InfoCell iconClass="fas fa-user" label="Experience" value={experience} />
              </div>
              <div>
                <InfoCell iconClass="fas fa-envelope" label="Email" value={email} />
              </div>
              <div className="sm:border-r border-gray-300">
                <InfoCell iconClass="fas fa-user" label="Phone" value={phone} />
              </div>
              <div>
                <InfoCell iconClass="fas fa-fax" label="Fax" value={fax} />
              </div>
            </div>

            <button className="bg-[#cb3a1a] text-white px-8 sm:px-12 py-3 text-md font-semibold hover:bg-red-700 transition w-full sm:w-fit">
              Contact Me
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full sm:w-[350px] h-[400px] max-w-sm aspect-square bg-[#d9d9d9] overflow-hidden">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
