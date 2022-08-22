import { rest } from "msw";
import questionList from "../data/questions.json";

export const handlers = [
  // Handles a GET /questions request
  rest.get(`${process.env.REACT_APP_API_URL}/questions`, (req, res, ctx) => {
    return res(ctx.json(questionList));
  }),
  // Handles a POST /questions request
];
