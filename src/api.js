import questions from "./data/questions.json";
import singleQuestion from "./data/singleQuestion.json";
import answers from "./data/answers.json";


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

const getAnswers = async () => {
  const data = {
    body: answers,
    error: undefined,
  };
  return data;
};

export { getQuestions, getQuestionById, getAnswers };