import questions from "./data/questions.json";
import singleQuestion from "./data/singleQuestion.json";

const getQuestions = async () => {
  const data = {
    body: questions,
    error: undefined,
  };
  return data;
};

const getQuestionById = async (id) => {
  const data = {
    body: singleQuestion,
    error: undefined,
  };
  return data;
};

export { getQuestions, getQuestionById };
