import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Questionz.io/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders lists of questions", async () => {
  render(<App />);
  const linkElement = await screen.findByRole("list");
  expect(linkElement).toBeInTheDocument();
});

test.todo("renders error if data.error is returned");
