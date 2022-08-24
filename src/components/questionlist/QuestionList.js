import Question from "./Question";
import FilterForm from "./FilterForm";
import React, { useState } from "react";
import "./QuestionList.css";
import { Link } from "react-router-dom";

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

const filterByTopic = (topic, useTopic) => {
  if (useTopic === "All") {
    return true;
  }
  return topic === useTopic;
};

const QuestionList = ({ questions, searchText }) => {
  const [useAnswered, setUseAnswered] = useState("both");
  const [useTopic, setUseTopic] = useState("All");
  if (questions.length === 0) {
    return <p>No questions yet!</p>;
  }
  return (
    <div>
      <Link className="link-format" to="/askQuestion">
        Ask Question
      </Link>
      <FilterForm
        useAnswered={useAnswered}
        setUseAnswered={setUseAnswered}
        useTopic={useTopic}
        setUseTopic={setUseTopic}
      />
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
          .filter((question) => filterByTopic(question.topic, useTopic))
          .map((question) => (
            <div className="question-container" key={question.question_id}>
              <Question
                question_id={question.question_id}
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
