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
    data.error = err;
  }
  return data;
};

const postQuestion = async (formData) => { 
  const data = {
    body: undefined,
    error: undefined,
  };
  try {
    const response = await axios.post(`/api/questions`, {
      body: formData
    });
    data.body = response.data;
  } catch (err) {
    data.error = err;
  }
  console.log(data.body)
  return data.body;
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

export { getQuestions, getQuestionById, getAnswers, postQuestion };
