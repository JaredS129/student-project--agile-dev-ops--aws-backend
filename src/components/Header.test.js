import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("renders header components", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(screen.getByText("Questionz.io")).toBeInTheDocument();
});
