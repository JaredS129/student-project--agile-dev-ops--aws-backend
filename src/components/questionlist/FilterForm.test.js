import { render, screen } from "@testing-library/react";
import FilterForm from "./FilterForm";
import topics from "../../data/topics.json";

test("renders the dropdown boxes", async () => {
  render(<FilterForm topics={topics} />);
  expect(screen.getAllByRole("combobox")).toHaveLength(2);
});
