import { render, screen } from "@testing-library/react";
import Answer from "./Answer";

test("renders an answer", () => {
  render(
    <Answer answerTitle="TestAnswer" answerText="TestText" goodAnswer={false} />
  );
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "TestAnswer"
  );
  expect(screen.getByText("TestText")).toBeInTheDocument();
});

test("renders an answer that is the solution", () => {
  render(
    <Answer answerTitle="TestAnswer" answerText="TestText" goodAnswer={true} />
  );
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "TestAnswer"
  );
  expect(screen.getByText("TestText")).toBeInTheDocument();
  expect(screen.getByText("Solution")).toBeInTheDocument();
});
