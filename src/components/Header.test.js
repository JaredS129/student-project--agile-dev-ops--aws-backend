import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders header components", () => {
  render(
    <Header>
    </Header>
  );

  expect(screen.getByText("Questionz.io")).toBeInTheDocument();
  expect(screen.getByText("Log In")).toBeInTheDocument();
  expect(screen.getByText("Dashboard")).toBeInTheDocument();
});
