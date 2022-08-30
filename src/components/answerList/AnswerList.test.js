import { render, screen, within, waitFor } from "@testing-library/react";
import AnswerList from "./AnswerList";
import answerData from "../../data/answers.json";

describe("AnswerList", () => {
  const answers = answerData["1"];
  const renderAnswers = () => {
    render(<AnswerList answers={answers} />);
  };
  let listItems;

  test("renders a list of answers", async () => {
    renderAnswers();
    await waitFor(() => {
      listItems = screen.getAllByRole("listitem");
    });
    expect(listItems).toHaveLength(answers.length);
  });

  test("renders the correct answer titles", async () => {
    renderAnswers();
    await waitFor(() => {
      listItems = screen.getAllByRole("listitem");
    });
    listItems.forEach((item, index) => {
      const { getByRole } = within(item);
      const { author } = answers[index];
      expect(getByRole("heading", { level: 3 })).toHaveTextContent(author);
    });
  });

  test("renders the correct summaries", async () => {
    renderAnswers();
    await waitFor(() => {
      listItems = screen.getAllByRole("listitem");
    });
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { body } = answers[index];
      expect(getByText(body)).toHaveTextContent(body);
    });
  });
});
