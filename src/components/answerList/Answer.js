import "./Answer.css";

const Answer = ({ answerTitle, answerText, goodAnswer }) => {
  return (
    <li>
      <h3>{answerTitle}</h3>
      <p>{answerText}</p>
      {goodAnswer ? <span>Solution</span> : null}
    </li>
  );
};

export default Answer;
