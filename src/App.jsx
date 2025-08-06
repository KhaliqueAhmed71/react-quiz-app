import React, { useState, useEffect } from "react";
import questions from "./questions";
import QuestionScreen from "./QuestionScreen";
import StartScreen from "./StartScreen"; // Make sure this exists
import ResultScreen from "./ResultScreen";


function App() {
  const [isStarted, setIsStarted] = useState(false); // NEW
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const stored = localStorage.getItem("highScore");
    return stored ? parseInt(stored) : 0;
  });
  const [timeLeft, setTimeLeft] = useState(450); // 7 min 30 sec = 450 seconds
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const totalScore = questions.reduce((acc, q) => acc + q.points, 0);

  // Timer logic
  useEffect(() => {
    if (!isStarted) return;

    

    

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted]);

   // ✅ Finalize quiz and update high score
  const finishQuiz = () => {
    setIsFinished(true);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  };

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
      finishQuiz(); 
    }
  };

  // Start Quiz
  const handleStart = () => {
    setIsStarted(true);
  };
  const handleRestart = () => {
  setIsStarted(false);       // 👈 back to StartScreen
  setIsFinished(false);      // 👈 end result screen
  setCurrentQuestionIndex(0);
  setSelectedOption(null);
  setScore(0);
  setTimeLeft(450);          // ⏱ reset timer
};

  if (!isStarted) {
    return <StartScreen onStart={handleStart} />;
  }

  if (isFinished) {
  return (
    <ResultScreen
      score={score}
      highScore={highScore}
      totalMarks={totalScore}
      onRestart={handleRestart}
    />
  );
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
