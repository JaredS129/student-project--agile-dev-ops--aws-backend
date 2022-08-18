import { render, screen } from "@testing-library/react";
import Header from "./Header.";

test("renders header components", () => {
  render(
    <Header>
    </Header>
  );
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "TestQuestion"
  );
  expect(screen.getByText("TestSummary")).toBeInTheDocument();
  expect(screen.getByText("test")).toBeInTheDocument();
  expect(screen.getByText("Solved")).toBeInTheDocument();
});
