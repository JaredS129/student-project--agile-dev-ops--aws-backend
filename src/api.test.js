import { getQuestions } from "./api";
import questions from "./data/questions.json";

test("getQuestions returns data", async () => {
  const expectedQuestions = questions;
  expect(await getQuestions()).toEqual(expectedQuestions);
});
