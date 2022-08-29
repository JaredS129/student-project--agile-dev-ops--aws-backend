const sortQuestions = (questions) => {
  if (!Array.isArray(questions)) {
    return {
      error: "incorrect input to sortQuestions function",
    };
  }
  let sortedQuestions = [];
  const answered = questions.filter(
    (question) => question.is_answered === true
  );
  const unanswered = questions.filter(
    (question) => question.is_answered === false
  );
  unanswered.forEach((question) => {
    sortedQuestions.push(question);
  });
  answered.forEach((question) => {
    sortedQuestions.push(question);
  });
  return sortedQuestions;
};

export default sortQuestions;
