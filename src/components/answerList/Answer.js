import "./Answer.css";

const Answer = ({ author, body, is_solution }) => {
  return (
    <li className="answer-container">
      <h3 className="answer-title">{author}</h3>
      <p className="answer-body">{body}</p>
      {is_solution ? <span className="answer-solution">Solution</span> : null}
      <span className="answer-date">10 Sept 2022 - 09:35am</span>
    </li>
  );
};

export default Answer;
