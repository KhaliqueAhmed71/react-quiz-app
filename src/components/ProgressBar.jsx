import React from "react";

export default function ProgressBar({ current, total, score, totalScore }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full mb-6">
      {/* Progress Bar */}
      <div className="w-full h-[12px] bg-gray-500 rounded-full overflow-hidden">
        <div
          className="h-full bg-sky-400 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Labels below */}
      <div className="flex justify-between text-sm text-white mt-2">
        <p className="font-time text-lg text-gray-300">
  Question <span className="font-bold">{current}</span> / {total}
</p>

        <p className="font-time text-lg text-gray-300">
          <span className="font-bold">{score}</span> / {totalScore}
        </p>
      </div>
    </div>
  );
}
