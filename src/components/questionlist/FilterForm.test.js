import { render, screen } from "@testing-library/react";
import FilterForm from "./FilterForm";

test("renders the dropdown boxes", () => {
  render(<FilterForm />);
  expect(screen.getAllByRole("combobox")).toHaveLength(2);
});
