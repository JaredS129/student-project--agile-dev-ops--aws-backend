import { rest } from "msw";
import questionList from "../data/questions.json";

export const handlers = [
  // Handles a GET /questions request
  rest.get(`/api/questions`, (req, res, ctx) => {
    const answered = req.url.searchParams.get("answered");
    const topic = req.url.searchParams.get("topic");

    if (!answered && !topic) {
      return res(ctx.json(questionList));
    } else if (answered && topic) {
      return res(
        ctx.json(
          questionList
            .filter((question) => question.isAnswered === answered)
            .filter((question) => question.topic === topic)
        )
      );
    } else if (answered) {
      return res(
        ctx.json(
          questionList.filter((question) => question.isAnswered === answered)
        )
      );
    } else if (topic) {
      return res(
        ctx.json(questionList.filter((question) => question.topic === topic))
      );
    }
  }),
  // Handles a POST /questions request
];
