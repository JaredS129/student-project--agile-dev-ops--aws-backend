import singleQuestion from "./data/singleQuestion.json";
import answers from "./data/answers.json";
import axios from "axios";

const getQuestions = async () => {
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

const getPost = async () => {
  const data = {
    body: undefined,
    error: undefined,
  };
  try {
    const response = await axios.post(`/api/questions`);
    data.body = response.data;
  } catch (err) {
    console.log(err);
    data.error = err;
  }
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

export { getQuestions, getQuestionById, getAnswers, getPost };
