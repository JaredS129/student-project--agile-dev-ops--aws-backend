import { render, screen } from "@testing-library/react";
import FullQuestion from "./FullQuestion"

test("renders a full question", () => {
  render(
    <FullQuestion
      title="TestQuestion"
      summary="TestSummary"
      topic="testTopic"
      isAnswered="isAnsweredTest"
      workOn="workOnTest"
      tryAchieve="tryAchieveTest"
      issue="issueTest"
      attempted="attemptedTest"
    />
  );
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
    "TestQuestion"
  );
  expect(screen.getByText("testTopic")).toBeInTheDocument();
  expect(screen.getByText("workOnTest")).toBeInTheDocument();
  expect(screen.getByText("tryAchieveTest")).toBeInTheDocument();
  expect(screen.getByText("issueTest")).toBeInTheDocument();
  expect(screen.getByText("attemptedTest")).toBeInTheDocument();
});
