import { render, screen } from "@testing-library/react";
import Question from "./Question";
import { BrowserRouter } from "react-router-dom";

test("renders a solved question", () => {
  render(
    <BrowserRouter>
      <Question
        title="TestQuestion"
        summary="TestSummary"
        topic="test"
        isAnswered={true}
      />
    </BrowserRouter>
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
    <BrowserRouter>
      <Question
        title="TestQuestion"
        summary="TestSummary"
        topic="test"
        isAnswered={false}
      />
    </BrowserRouter>
  );
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "TestQuestion"
  );
  expect(screen.getByText("TestSummary")).toBeInTheDocument();
  expect(screen.getByText("test")).toBeInTheDocument();
  expect(screen.getByText("Not answered")).toBeInTheDocument();
});
