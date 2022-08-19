import Question from "./Question";
import "./QuestionList.css";

const QuestionList = ({ questions, searchText }) => {
  return (
    <ul>
      {questions
        .filter((question) =>
          question.title.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((question) => (
          <div className="question-container">
            <Question
              key={question.question_id}
              title={question.title}
              topic={question.topic}
              summary={question.summary}
              isAnswered={question.isAnswered}
            />
          </div>
        ))}
    </ul>
  );
};

export default QuestionList;
