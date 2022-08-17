import { render, screen } from "@testing-library/react";
import Question from "./Question";

test("renders a solved question", () => {
  render(
    <Question
      title="TestQuestion"
      summary="TestSummary"
      topic="test"
      isAnswered={true}
    />
  );
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "TestQuestion"
  );
  expect(screen.getByText("TestSummary")).toBeInTheDocument();
  expect(screen.getByText("test")).toBeInTheDocument();
  expect(screen.getByText("Solved")).toBeInTheDocument();
});

test("renders an unsolved question", () => {
  render(
    <Question
      title="TestQuestion"
      summary="TestSummary"
      topic="test"
      isAnswered={false}
    />
  );
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "TestQuestion"
  );
  expect(screen.getByText("TestSummary")).toBeInTheDocument();
  expect(screen.getByText("test")).toBeInTheDocument();
  expect(screen.getByText("Not answered")).toBeInTheDocument();
});
