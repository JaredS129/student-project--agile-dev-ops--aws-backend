import "./Question.css";
import { Link } from "react-router-dom";

const Question = ({ question_id, title, summary, topic, isAnswered }) => {
  return (
    <li className="question-grid">
      <Link to={`/question/${question_id}`}>
        <h3 className="title-format">{title}</h3>
      </Link>
      <p className="answer-format">
        {isAnswered ? (
          <span data-testid="test-answer" className="solved-format">
            Solved
          </span>
        ) : (
          <span data-testid="test-answer" className="not-answered-format">
            Not answered
          </span>
        )}
      </p>
      <p className="summary-format">{summary}</p>
      <p className="topic-layout" data-testid="topic">
        {topic}
      </p>
    </li>
  );
};

export default Question;
