import Answer from "./Answer";
import React from "react";
import "./AnswerList.css";

const AnswerList = ({ answers }) => {
  return (
    <div>
      <ul>
        {answers.map((answer) => {
          return (
            <Answer
              key={answer.answer_id}
              answerTitle={answer.answerTitle}
              answerText={answer.answerText}
              goodAnswer={answer.goodAnswer}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AnswerList;
