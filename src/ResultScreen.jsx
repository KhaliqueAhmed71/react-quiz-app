import React from "react";

function ResultScreen({ score, totalMarks = 280, highScore, onRestart }) {
  const percentage = ((score / totalMarks) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-[#343a40] text-white flex justify-center px-4 py-20">
      <div className="flex flex-col items-center gap-9">
        {/* Header */}
        <div className="flex items-center gap-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="Logo"
            className="w-28 h-28"
          />
          <h1 className="text-6xl font-bold font-[DotGothic16]">
            The React Quiz
          </h1>
        </div>

        {/* Score Bar */}
        <div
          className="w-full max-w-xl px-7 py-5 rounded-full flex items-center justify-center text-xl font-semibold mb-[-20px]"
          style={{ backgroundColor: "#1098ad" }}
        >
          <span className="text-2xl mr-4">{percentage >= 50 ? "😊" : "😕"}</span>
          <span>
            You scored {score} / {totalMarks} ({percentage}%)
          </span>
        </div>

        {/* High Score */}
        <p className="text-white text-lg">
          (Highscore: {highScore} points)
        </p>

        {/* Restart button aligned to score bar's right */}
        <div className="w-full max-w-xl flex justify-end">
          <button
            onClick={onRestart}
            className="px-7 py-3 rounded-full text-white text-lg bg-[#495057] hover:bg-gray-600 cursor-pointer hover:scale-105 transition duration-300"
          >
            Restart quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultScreen;
