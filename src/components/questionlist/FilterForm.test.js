import { render, screen } from "@testing-library/react";
import FilterForm from "./FilterForm";
import axios from "axios";
import topics from "../../data/topics.json";

jest.mock("axios");

axios.get.mockImplementation(topics);

test("renders the dropdown boxes", async () => {
  render(<FilterForm />);
  expect(screen.getAllByRole("combobox")).toHaveLength(2);
});
