import "./Question.css";

const Question = ({ title, summary, topic, isAnswered }) => {
  return (
    <li>
      <div className="grid-container">
        <h3>{title}</h3>
        <p>{isAnswered ? "Solved" : "Not answered"}</p>
      </div>
      <p className="summary-format">{summary}</p>
      <p className="topic-format">{topic}</p>
    </li>
  );
};

export default Question;
