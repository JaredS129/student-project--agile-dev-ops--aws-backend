const FullQuestion = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>Topic</h3>
      <p>{props.topic}</p>
      <h3>What have you worked on?</h3>
      <p>{props.workOn}</p>
      <h3>What are you trying to achieve?</h3>
      <p>{props.tryAchieve}</p>
      <h3>What is the issue you are having?</h3>
      <p>{props.issue}</p>
      <h3>What have you attempted?</h3>
      <p>{props.attempted}</p>
    </div>
  );
};

export default FullQuestion;
