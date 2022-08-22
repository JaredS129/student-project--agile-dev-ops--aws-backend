import questions from "./data/questions.json";
import answers from "./data/answers.json";

const getQuestions = async () => {
  const data = {
    body: questions,
    error: undefined,
  };
  return data;
};

const getAnswers = async () => {
  const data = {
    body: answers,
    error: undefined,
  };
  return data;
};

export { getQuestions, getAnswers };
