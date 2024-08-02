import React from "react";

export default function Question({ question, nextquestion }) {
  return (
    <>
      <h1>{question.questionText}</h1>
      <ul>
        {question.answerOptions.map((answer) => (
          <div key={answer.answerText}>
            <li onClick={() => nextquestion(answer.isCorrect)}>{answer.answerText}</li>
            <br />
          </div>
        ))}
      </ul>
    </>
  );
}
