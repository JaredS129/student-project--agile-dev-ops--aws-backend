import "./Question.css";

const Question = ({ title, summary, topic, isAnswered }) => {
  return (
    <li>
      <div className="question-grid">
        <h3 className="title-format">{title}</h3>
        <p className="answer-format">{isAnswered ? <div className="solved-format">Solved</div> : <div className="not-answered-format">Not answered</div>}</p>
      </div>
      <p className="summary-format">{summary}</p>
      <p className="topic-format">{topic}</p>
    </li>
  );
};

export default Question;
