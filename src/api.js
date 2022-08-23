import questions from "./data/questions.json";
import singleQuestion from "./data/singleQuestion.json";
import answers from "./data/answers.json";
import axios from "axios";

const actualGetQuestions = async () => {
  const data = {
    body: undefined,
    error: undefined,
  };
  try {
    const response = await axios.get(`/api/questions`);
    data.body = response.data;
  } catch (err) {
    console.log(err);
    data.error = err;
  }
  return data;
};

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

export { getQuestions, getQuestionById, getAnswers, actualGetQuestions };
