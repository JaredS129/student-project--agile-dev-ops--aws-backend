import singleQuestion from "./data/singleQuestion.json";
import answers from "./data/answers.json";
import axios from "axios";

const getQuestions = async (answered, topic) => {
  const data = {
    body: undefined,
    error: undefined,
  };
  try {
    if (answered === undefined && topic === undefined) {
      const response = await axios.get(`/api/questions`);
      data.body = response.data;
    }
    if (answered === undefined) {
      const response = await axios.get(`/api/questions?topic=${topic}`);
      data.body = response.data;
    }
    if (topic === undefined) {
      const response = await axios.get(`/api/questions?answered=${answered}`);
      data.body = response.data;
    }
    if (topic && answered) {
      const response = await axios.get(
        `/api/questions?answered=${answered}&topic=${topic}`
      );
      data.body = response.data;
    }
  } catch (err) {
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
    const response = await axios.post(`/api/questions`, {});
    data.body = response.data;
  } catch (err) {
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
