import Question from "./Question";
import FilterForm from "./FilterForm";
import React, { useState } from "react";
import "./QuestionList.css";

const filterByAnswered = (isAnswered, useAnswered) => {
  // if useAnswered is both then return true
  if (useAnswered === "both") {
    return true;
  }
  if (useAnswered === "answered" && isAnswered) {
    return true;
  }
  if (useAnswered === "unanswered" && !isAnswered) {
    return true;
  }
  return false;
};

const QuestionList = ({ questions, searchText }) => {
  const [useAnswered, setUseAnswered] = useState("both");
  return (
    <div>
      <FilterForm useAnswered={useAnswered} setUseAnswered={setUseAnswered} />
      <ul>
        {questions
          .filter((question) =>
            question.title
              .toLowerCase()
              .includes(searchText ? searchText.toLowerCase() : "")
          )
          .filter((question) =>
            filterByAnswered(question.isAnswered, useAnswered)
          )
          .map((question) => (
            <div className="question-container" key={question.question_id}>
              <Question
                title={question.title}
                topic={question.topic}
                summary={question.summary}
                isAnswered={question.isAnswered}
              />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default QuestionList;
