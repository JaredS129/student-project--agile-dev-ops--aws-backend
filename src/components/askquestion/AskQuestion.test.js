import { render, screen } from "@testing-library/react";
import AskQuestion from "./AskQuestion.js";
import topics from "../../data/topics.json";

test("renders ask question component", () => {
  render(<AskQuestion topics={topics}></AskQuestion>);
  expect(screen.getByText("Title:")).toBeInTheDocument();
  expect(screen.getByText("What have you worked on?")).toBeInTheDocument();
  expect(
    screen.getByText("What are you trying to achieve?")
  ).toBeInTheDocument();
  expect(
    screen.getByText("What is the issue you are having?")
  ).toBeInTheDocument();
  expect(screen.getByText("What have you attempted?")).toBeInTheDocument();
});
