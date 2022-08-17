const getQuestions = async () => {
  const testQuestions = [
    {
      question_id: 1,
      title: "How to pat dogs",
    },
    {
      question_id: 2,
      title: "How to pat cats",
    },
    {
      question_id: 3,
      title: "How to juggle dogs",
    },
  ];

  return testQuestions;
};

module.exports = {getQuestions}
