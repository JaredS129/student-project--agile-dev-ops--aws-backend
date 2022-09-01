import { getQuestions } from "./api";
import questions from "./data/questions.json";
import { rest } from "msw";

const { server } = require("./mocks/server");

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("getQuestions", () => {
  const expectedQuestions = questions;

  test("When the api call is successful, getQuestions returns data", async () => {
    const response = await getQuestions();
    expect(response.body).toEqual(expectedQuestions);
  });

  test("getQuestions returns data with answered questions only", async () => {
    const response = await getQuestions(true);
    expect(response.body).toEqual(
      expectedQuestions.filter((question) => question.isAnswered === true)
    );
  });

  test("getQuestions returns data with un-answered questions only", async () => {
    const response = await getQuestions(false);
    expect(response.body).toEqual(
      expectedQuestions.filter((question) => question.isAnswered === false)
    );
  });

  test("getQuestions returns data with React questions only", async () => {
    const response = await getQuestions(undefined, "React");
    expect(response.body).toEqual(
      expectedQuestions.filter((question) => question.topic === "React")
    );
  });

  test("getQuestions returns data with Bugs questions only", async () => {
    const response = await getQuestions(undefined, "Bugs");
    expect(response.body).toEqual(
      expectedQuestions.filter((question) => question.topic === "Bugs")
    );
  });

  test("getQuestions returns data with how-to questions only", async () => {
    const response = await getQuestions(undefined, "how-to");
    expect(response.body).toEqual(
      expectedQuestions.filter((question) => question.topic === "how-to")
    );
  });

  test("getQuestions returns data with answered how-to questions only", async () => {
    const response = await getQuestions(true, "how-to");
    expect(response.body).toEqual(
      expectedQuestions
        .filter((question) => question.topic === "how-to")
        .filter((question) => question.isAnswered === true)
    );
  });

  test("getQuestions returns data with answered React questions only", async () => {
    const response = await getQuestions(true, "React");
    expect(response.body).toEqual(
      expectedQuestions
        .filter((question) => question.topic === "React")
        .filter((question) => question.isAnswered === true)
    );
  });

  test("When the api call is unsuccessful, getQuestions returns error", async () => {
    server.use(
      rest.get("/api/questions", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    const response = await getQuestions();

    expect(response.error).toBeTruthy();
  });
});
