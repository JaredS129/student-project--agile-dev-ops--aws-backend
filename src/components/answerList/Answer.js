import "./Answer.css";

const Answer = ({ answerTitle, answerText, goodAnswer }) => {
  return (
    <li className="answer-container">
      <h3 className="answer-title">{answerTitle}</h3>
      <p className="answer-body">{answerText}</p>
      {goodAnswer ? <span className="answer-solution">Solution</span> : null}
      <span className="answer-date">10 Sept 2022 - 09:35am</span>
    </li>
  );
};

export default Answer;
