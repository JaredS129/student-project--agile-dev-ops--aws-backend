const Question = ({ title, summary, topic, isAnswered }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{summary}</p>
      <p>{topic}</p>
      <p>{isAnswered ? "Solved" : "Not answered"}</p>
    </li>
  );
};

export default Question;
