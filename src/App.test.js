import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { rest } from "msw";
import { setupServer } from "msw/node";
import questions from "./data/questions.json";

const server = setupServer(
  rest.get("/api/questions", (req, res, ctx) => {
    return res(ctx.json(questions));
  })
);
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("renders title", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const title = await screen.findByText(/Questionz.io/i);
  expect(title).toBeInTheDocument();
});

test("renders lists of questions", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const listElement = await screen.findByRole("list");
  expect(listElement).toBeInTheDocument();
});

test("renders error if error from api call", async () => {
  server.use(
    rest.get("/api/questions", (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({ message: "Internal Server Error" })
      );
    })
  );
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const errorText = await screen.findByText(
    /Request failed with status code 500/i
  );
  expect(errorText).toBeInTheDocument();
});
