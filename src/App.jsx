import React, { useState, useEffect } from "react";
import questions from "./questions";
import QuestionScreen from "./QuestionScreen";
import StartScreen from "./StartScreen";
import ResultScreen from "./ResultScreen";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(450); // 7 min 30 sec
  const [isFinished, setIsFinished] = useState(false);
  const [correctQuestionsCount, setCorrectQuestionsCount] = useState(0);

  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("highScore")) || 0;
  });

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const totalScore = questions.reduce((acc, q) => acc + q.points, 0);

  // Format time
  const formattedTime = `${Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0")}:${(timeLeft % 60).toString().padStart(2, "0")}`;

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

  // Finalize quiz and update high score
  const finishQuiz = () => {
    setIsFinished(true);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  };

  // Select an option
  const handleSelect = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + currentQuestion.points);
      setCorrectQuestionsCount((prev) => prev + 1); // ✅ Count correct questions
    }
  };

  // Move to next question
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      finishQuiz();
    }
  };

  // Restart quiz
  const handleRestart = () => {
    setIsStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setTimeLeft(450);
    setIsFinished(false);
    setCorrectQuestionsCount(0); // ✅ Reset correct count
  };

  if (!isStarted) {
    return <StartScreen onStart={() => setIsStarted(true)} />;
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
      questionNumber={correctQuestionsCount} // ✅ Use correct answers for progress
      totalQuestions={totalQuestions}
      question={currentQuestion.question}
      options={currentQuestion.options}
      selectedOption={selectedOption}
      onSelect={handleSelect}
      correctAnswer={currentQuestion.correctAnswer}
      score={score}
      totalScore={totalScore}
      timeLeft={formattedTime}
      onNext={handleNext}
    />
  );
}

export default App;
