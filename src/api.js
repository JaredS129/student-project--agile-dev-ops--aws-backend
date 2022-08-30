import singleQuestion from "./data/singleQuestion.json";
import axios from "axios";

const getQuestions = async (answered, topic) => {
  const data = {
    body: undefined,
    error: undefined,
  };
  try {
    if (topic && answered) {
      const response = await axios.get(
        `/api/questions?answered=${answered}&topic=${topic}`
      );
      data.body = response.data;
    }
    if (answered === undefined && topic === undefined) {
      const response = await axios.get(`/api/questions`);
      data.body = response.data;
    } else if (answered === undefined) {
      const response = await axios.get(`/api/questions?topic=${topic}`);
      data.body = response.data;
    } else if (topic === undefined) {
      const response = await axios.get(`/api/questions?answered=${answered}`);
      data.body = response.data;
    }
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
      body: formData,
    });
    data.body = response.data;
  } catch (err) {
    data.error = err;
  }
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
    body: undefined,
    error: undefined,
  };

  try {
    const response = await axios.get(`/api/answers`);
    data.body = response.data;
  } catch (err) {
    data.error = err;
  }
  return data;
};

export const getTopics = async () => {
  const data = {
    body: undefined,
    error: undefined,
  };

  try {
    const response = await axios.get(`/api/topics`);
    data.body = response.data;
  } catch (err) {
    data.error = err;
  }
  return data;
};

export { getQuestions, getQuestionById, getAnswers, postQuestion };
