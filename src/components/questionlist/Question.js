const Question = ({ key, title, summary, topic, isAnswered }) => {
  return (
    <li key={key}>
      <h3>{title}</h3>
      <p>{summary}</p>
      <p>{topic}</p>
      <p>{isAnswered ? "Solved" : "Not answered"}</p>
    </li>
  );
};

export default Question;
