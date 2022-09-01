import { rest } from "msw";
import questionList from "../data/questions.json";
import topics from "../data/topics.json";

export const handlers = [
  // Handles a GET /questions request
  rest.get(`/api/questions`, (req, res, ctx) => {
    const answered = req.url.searchParams.get("answered");
    const topic = req.url.searchParams.get("topic");

    if (!answered && !topic) {
      return res(ctx.json(questionList));
    } else if (answered && topic) {
      const answeredParam = answered === "true" ? true : false;
      return res(
        ctx.json(
          questionList
            .filter((question) => question.isAnswered === answeredParam)
            .filter((question) => question.topic === topic)
        )
      );
    } else if (answered) {
      const answeredParam = answered === "true" ? true : false;
      return res(
        ctx.json(
          questionList.filter(
            (question) => question.isAnswered === answeredParam
          )
        )
      );
    } else if (topic) {
      return res(
        ctx.json(questionList.filter((question) => question.topic === topic))
      );
    }
  }),

  rest.get(`/api/topics`, (req, res, ctx) => {
    return res(ctx.json(topics));
  }),
  rest.get("http://localhost/api/topics", (req, res, ctx) => {
    return res(ctx.json(topics));
  }),
  // Handles a POST /questions request
];
