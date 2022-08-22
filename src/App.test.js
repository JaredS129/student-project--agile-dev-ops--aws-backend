import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders title", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const linkElement = await screen.findByText(/Questionz.io/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders lists of questions", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const linkElement = await screen.findByRole("list");
  expect(linkElement).toBeInTheDocument();
});

test.todo("renders error if data.error is returned");
