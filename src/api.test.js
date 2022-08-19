import { getQuestions } from "./api";
import questions from "./data/questions.json";

test("getQuestions returns data", async () => {
  const expectedQuestions = questions;
  const response = await getQuestions();

  expect(response.body).toEqual(expectedQuestions);
});
