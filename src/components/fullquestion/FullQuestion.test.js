import { render, screen } from "@testing-library/react";
import FullQuestion from "./FullQuestion.js";

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
      dateCreated="1997-07-16T19:20:30.45+01:00"
      author="testAuthor"
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
  //TO DO: fix date test since dates are REALLY annoying -> expect(screen.getByText(somedate)).toBeInTheDocument();
  //Why annoying? because the date will be different depending on the timezone of where the test is run
  expect(screen.getByText("testAuthor")).toBeInTheDocument();
});
