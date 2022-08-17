import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Questions/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders lists of questions", async () => {
  render(<App />);
  const linkElement = await screen.findByRole("list");
  expect(linkElement).toBeInTheDocument();
});
