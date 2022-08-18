import Question from "./Question";
import questionsData from "../../data/questions.json";

const QuestionList = () => {
  const questions = questionsData;

  return (
    <ul>
      {questions.map((question) => (
        <Question
          key={question.question_id}
          title={question.title}
          topic={question.topic}
          summary={question.summary}
          isAnswered={question.isAnswered}
        />
      ))}
    </ul>
  );
};

export default QuestionList;
