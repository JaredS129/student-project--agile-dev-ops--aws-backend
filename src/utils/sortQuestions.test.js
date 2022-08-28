import sortQuestions from "./sortQuestions";
import questions from "../data/questions.json";
import sortedQuestions from "../data/sortedQuestions.json";

describe("sortQuestions", () => {
  it("should return an array of question objects with unsanswered questions first", () => {
    expect(sortQuestions(questions)).toEqual(sortedQuestions);
  });
});
