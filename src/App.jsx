import React, { useState, useEffect } from "react";
import questions from "./questions";
import QuestionScreen from "./QuestionScreen";
import StartScreen from "./StartScreen"; // Make sure this exists

function App() {
  const [isStarted, setIsStarted] = useState(false); // NEW
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
 const [timeLeft, setTimeLeft] = useState(450); // 7 min 30 sec
const currentQuestion = questions[currentQuestionIndex];
const totalQuestions = questions.length;
const totalScore = questions.reduce((acc, q) => acc + q.points, 0);

// Helper to convert seconds to MM:SS
const formatTime = (seconds) => {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${secs}`;
};

// Timer logic
useEffect(() => {
  if (!isStarted) return;

  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        alert(`Time's up! Your final score is ${score} / ${totalScore}`);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [isStarted]);

// In your JSX
<p>Time Left: {formatTime(timeLeft)}</p>


  // Handle selecting an option
  const handleSelect = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + currentQuestion.points);
    }
  };

  // Handle moving to next question
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      alert(`Quiz finished! Your final score is ${score} / ${totalScore}`);
    }
  };

  // Start Quiz
  const handleStart = () => {
    setIsStarted(true);
  };

  if (!isStarted) {
    return <StartScreen onStart={handleStart} />;
  }

  return (
    <QuestionScreen
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={totalQuestions}
      question={currentQuestion.question}
      options={currentQuestion.options}
      selectedOption={selectedOption}
      onSelect={handleSelect}
      correctAnswer={currentQuestion.correctAnswer}
      score={score}
      totalScore={totalScore}
      timeLeft={timeLeft}
      onNext={handleNext}
    />
  );
}

export default App;
