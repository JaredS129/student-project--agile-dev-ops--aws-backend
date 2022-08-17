const Question = (title, summary, topic, isAnswered) => {
  return (
    <li>
      <p>${title}</p>
      <p>${summary}</p>
      <p>${topic}</p>
      <p>${isAnswered}</p>
    </li>
  );
};

export default Question;
