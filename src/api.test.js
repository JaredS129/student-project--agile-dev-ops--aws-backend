import { getQuestions } from "./api";
import questions from "./data/questions.json";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/api/questions", (req, res, ctx) => {
    return res(ctx.json(questions));
  })
);
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("getQuestions", () => {
  const expectedQuestions = questions;

  test("When the api call is successful, getQuestions returns data", async () => {
    const response = await getQuestions();
    expect(response.body).toEqual(expectedQuestions);
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
