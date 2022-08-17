import { getQuestions } from "./api";

test("getQuestions returns data", async () => {
  const expectedQuestions = [
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

  expect(await getQuestions()).toEqual(expectedQuestions);
});
