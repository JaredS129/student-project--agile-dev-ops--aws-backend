import { render, screen } from "@testing-library/react";
import Question from "./Question";

test("renders a question", () => {
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
});
