import { useParams } from "react-router-dom";

const FullQuestion = (props) => {
  const { id } = useParams();
  return (
    <div>
      <h2>{props.title ?? id}</h2>
      <h3>Topic</h3>
      <p>{props.topic ?? "placeholder"}</p>
      <h3>What have you worked on?</h3>
      <p>{props.workOn ?? "placeholder"}</p>
      <h3>What are you trying to achieve?</h3>
      <p>{props.tryAchieve ?? "placeholder"}</p>
      <h3>What is the issue you are having?</h3>
      <p>{props.issue ?? "placeholder"}</p>
      <h3>What have you attempted?</h3>
      <p>{props.attempted ?? "placeholder"}</p>
    </div>
  );
};

export default FullQuestion;
