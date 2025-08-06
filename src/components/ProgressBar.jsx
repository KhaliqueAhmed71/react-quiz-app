import React from "react";

export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="relative w-full h-3 bg-gray-300 rounded-full overflow-hidden mb-4">
      <div
        className="absolute left-0 top-0 h-full bg-sky-500 transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
