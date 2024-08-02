import { useState } from "react";
import questions from "./questions.json";
import Question from "./Question";
export default function App() {
  const [currentquestion, setcurrentquestion] = useState(0);
  const [score, setscore] = useState(0);
  function nextquestion(isCorrect) {
    if (isCorrect) setscore(score + 1);
    setcurrentquestion(currentquestion + 1);
  }

  return (
    <>
      {currentquestion > questions.length - 1 ? (
        <h1>your score is {score}</h1>
      ) : (
        <Question
          question={questions[currentquestion]}
          nextquestion={nextquestion}
        ></Question>
      )}
    </>
  );
}
