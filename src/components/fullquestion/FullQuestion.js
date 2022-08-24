import { useParams } from "react-router-dom";
import "./FullQuestion.css";
import AnswerList from "../answerList/AnswerList";
import answers from "../../data/answers.json";

const FullQuestion = (props) => {
  const { id } = useParams();
  let niceDate = props.dateCreated;
  try {
    niceDate = new Date(props.dateCreated).toLocaleDateString();
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <div>
        <h2 className="h2-format">{props.title ?? id}</h2>
        <h3 className="h3-format">What have you worked on?</h3>
        <p className="answered-question-format">
          {props.workOn ?? "placeholder"}
        </p>
        <h3 className="h3-format">What are you trying to achieve?</h3>
        <p className="answered-question-format">
          {props.tryAchieve ?? "placeholder"}
        </p>
        <h3 className="h3-format">What is the issue you are having?</h3>
        <p className="answered-question-format">
          {props.issue ?? "placeholder"}
        </p>
        <h3 className="h3-format">What have you attempted?</h3>
        <p className="answered-question-format">
          {props.attempted ?? "placeholder"}
        </p>
        <div className="question-info">
          <span>{niceDate ?? "placeholder"}</span>
          <span> - {props.topic ?? "placeholder"} </span>
          <span>
            - asked by:{" "}
            <span className="info-author">{props.author ?? "placeholder"}</span>
          </span>
        </div>
      </div>
      <AnswerList answers={answers["1"]} />
    </>
  );
};

export default FullQuestion;
