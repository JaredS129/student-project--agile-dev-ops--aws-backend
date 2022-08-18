import Question from "./Question";
import questionsData from "../../data/questions.json";
import "./QuestionList.css";

const QuestionList = () => {
  const questions = questionsData;

  return (
    <ul>
      {questions.map((question) => (
        <div className="question-container">
        <Question
          key={question.question_id}
          title={question.title}
          topic={question.topic}
          summary={question.summary}
          isAnswered={question.isAnswered}
        /></div>
      ))}
    </ul>
  );
};

export default QuestionList;
