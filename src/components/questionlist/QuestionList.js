import Question from "./Question";

const QuestionList = () => {
  const questions = [
    {
      id: 1,
      title: "Question 1",
      topic: "React",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      isAnswered: true,
    },
    {
      id: 2,
      title: "Question 2",
      topic: "React",
      summary: "Lorem ipsum dolor sit ",
      isAnswered: false,
    },
    {
      id: 3,
      title: "Question 3",
      topic: "Express",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius",
      isAnswered: false,
    },
    {
      id: 4,
      title: "Question 4",
      topic: "PostgresSQL",
      summary: "Lorem ipsum dolor sit amet, consectet",
      isAnswered: true,
    },
  ];

  return (
    <ul>
      {questions.map((question) => (
        <Question
          key={question.id}
          title={question.title}
          topic={question.topic}
          summary={question.summary}
          isAnswered={question.imageDescription}
        />
      ))}
    </ul>
  );
};

export default QuestionList;
