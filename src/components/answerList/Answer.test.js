import { render, screen } from "@testing-library/react";
import Answer from "./Answer";

test("renders an answer", () => {
  render(<Answer author="TestAnswer" body="TestText" is_solution={false} />);
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "TestAnswer"
  );
  expect(screen.getByText("TestText")).toBeInTheDocument();
});

test("renders an answer that is the solution", () => {
  render(<Answer author="TestAnswer" body="TestText" is_solution={true} />);
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "TestAnswer"
  );
  expect(screen.getByText("TestText")).toBeInTheDocument();
  expect(screen.getByText("Solution")).toBeInTheDocument();
});
