import Question from "./Question";
import FilterForm from "./FilterForm";
import "./QuestionList.css";
import { Link } from "react-router-dom";
import sortQuestions from "../../utils/sortQuestions";

const QuestionList = ({
  questions,
  searchText,
  answered,
  setAnswered,
  topic,
  setTopic,
}) => {
  const sortedQuestions = sortQuestions(questions);

  if (questions.length === 0) {
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
        <p>No questions yet!</p>
      </div>
    );
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
      {!topic ? null : <p data-testid="test-topic">{topic}</p>}
      <ul>
        {sortedQuestions
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
