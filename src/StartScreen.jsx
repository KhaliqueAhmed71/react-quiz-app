import React from "react";

export default function StartScreen({ onStart }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
      
      {/* Header: Logo + Title in one line */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="w-20 h-20"
        />
        <h1 className="text-5xl font-bold text-center header-title">
          THE REACT QUIZ
        </h1>
      </div>

      <h2 className="text-2xl font-semibold mb-2 text-center">
        Welcome to The React Quiz!
      </h2>
      <p className="text-lg mb-8 text-center">
        15 questions to test your React mastery
      </p>

      <button
        onClick={onStart}
        className="bg-gray-500 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-lg transition duration-300 cursor-pointer"
      >
        Let's start
      </button>
    </div>
  );
}
