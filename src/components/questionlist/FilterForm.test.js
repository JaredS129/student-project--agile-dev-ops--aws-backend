import { render, screen } from "@testing-library/react";
import FilterForm from "./FilterForm";

test("renders the dropdown box", () => {
  render(<FilterForm />);
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});
