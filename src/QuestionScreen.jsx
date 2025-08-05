import React from "react";

export default function QuestionScreen({
  questionNumber,
  totalQuestions,
  question,
  options,
  selectedOption,
  onSelect,
  correctAnswer,
  score,
  totalScore,
  timeLeft,
  onNext,
}) {
  if (!question) {
    return <p className="text-white text-center mt-10">Loading question...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="Logo"
              className="w-25 h-25"
            />
            <h1 className="text-7xl font-bold font-[DotGothic16]">The React Quiz</h1>
          </div>
        </div>

        {/* Score Bar */}
        <div className="relative w-full h-2 bg-gray-700 rounded-full mb-4">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${(score / totalScore) * 100}%` }}
          />
        </div>

        {/* Question Progress + Score */}
        <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
          <p>Question {questionNumber} / {totalQuestions}</p>
          <p>Score: {score} / {totalScore}</p>
        </div>

        {/* Question */}
        <h2 className="text-xl font-semibold mb-6">{question}</h2>

        {/* Options */}
        <div className="space-y-4">
          {options?.map((option) => {
            let bgColor = "bg-gray-800";

            if (selectedOption) {
              if (option === correctAnswer) {
                bgColor = "bg-sky-500";
              } else if (option === selectedOption) {
                bgColor = "bg-orange-500";
              } else {
                bgColor = "bg-orange-500";
              }
            }

            return (
              <button
                key={option}
                onClick={() => !selectedOption && onSelect(option)}
                className={`w-full text-left px-4 py-3 rounded-lg ${bgColor} hover:translate-x-2 cursor-pointer transition-all duration-200`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Bottom: Time + Next */}
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-300">Time Left: {timeLeft}</div>
          {selectedOption && (
            <button
              onClick={onNext}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
