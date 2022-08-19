import questions from "./data/questions.json";

const getQuestions = async () => {
  const data = {
    body: questions,
    error: undefined,
  };
  return data;
};

export { getQuestions };
