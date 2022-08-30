import Answer from "./Answer";
import React from "react";
import "./AnswerList.css";

const AnswerList = (answers) => {
  if (!Array.isArray(answers)) {
    console.log(answers);
    return (
      <>
        <p>No answers!</p>
      </>
    );
  }

  return (
    <div>
      <ul>
        {answers.map((answer) => {
          return (
            <Answer
              key={answer.answer_id}
              author={answer.author}
              body={answer.body}
              is_solution={answer.is_solution}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AnswerList;
