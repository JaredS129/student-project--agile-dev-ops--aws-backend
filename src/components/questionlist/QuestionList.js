import Question from "./Question";
import FilterForm from "./FilterForm";
import React, { useState } from "react";
import "./QuestionList.css";
import { Link } from "react-router-dom";

// const filterByAnswered = (isAnswered, useAnswered) => {
//   // if useAnswered is both then return true
//   if (useAnswered === "both") {
//     return true;
//   }
//   if (useAnswered === "answered" && isAnswered) {
//     return true;
//   }
//   if (useAnswered === "unanswered" && !isAnswered) {
//     return true;
//   }
//   return false;
// };

// const filterByTopic = (topic, useTopic) => {
//   if (useTopic === "All") {
//     return true;
//   }
//   return topic === useTopic;
// };

const QuestionList = ({
  questions,
  searchText,
  answered,
  setAnswered,
  topic,
  setTopic,
}) => {
  if (questions.length === 0) {
    return <p>No questions yet!</p>;
  }
  return (
    <div>
      <Link className="link-format" to="/askQuestion">
        Ask Question
      </Link>
      <FilterForm
        answered={answered}
        setAnswered={setAnswered}
        topic={topic}
        setTopic={setTopic}
      />
      <ul>
        {questions
          .filter((question) =>
            question.title
              .toLowerCase()
              .includes(searchText ? searchText.toLowerCase() : "")
          )
          .map((question) => (
            <div className="question-container" key={question.question_id}>
              <Question
                question_id={question.question_id}
                title={question.title}
                topic={question.topic}
                summary={question.summary}
                isAnswered={question.is_answered}
              />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default QuestionList;
