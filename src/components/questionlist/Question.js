import "./Question.css";

const Question = ({ title, summary, topic, isAnswered }) => {
  return (
    <li>
      <div className="question-grid">
        <h3 className="title-format">{title}</h3>
        <p className="answer-format">
          {isAnswered ? (
            <span className="solved-format">Solved</span>
          ) : (
            <span className="not-answered-format">Not answered</span>
          )}
        </p>
      </div>
      <p className="summary-format">{summary}</p>
      <p className="topic-format">{topic}</p>
    </li>
  );
};

export default Question;
