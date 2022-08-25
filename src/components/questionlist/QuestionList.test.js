import { render, screen, within } from "@testing-library/react";
import QuestionList from "./QuestionList";
import questionData from "../../data/questions.json";
import { BrowserRouter } from "react-router-dom";

describe("QuestionList", () => {
  const questions = questionData;
  render(
    <BrowserRouter>
      <QuestionList questions={questions} />
    </BrowserRouter>
  );
  const listItems = screen.getAllByRole("listitem");

  test("renders a list of questions", () => {
    expect(listItems).toHaveLength(questions.length);
  });

  test("renders the correct titles", () => {
    listItems.forEach((item, index) => {
      const { getByRole } = within(item);
      const { title } = questions[index];
      expect(getByRole("heading", { level: 3 })).toHaveTextContent(title);
    });
  });

  test("renders the correct summaries", () => {
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { summary } = questions[index];
      expect(getByText(summary)).toHaveTextContent(summary);
    });
  });

  test("renders the correct topic", () => {
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { topic } = questions[index];
      expect(getByText(topic)).toHaveTextContent(topic);
    });
  });

  test("renders the correct answered status", () => {
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { is_answered } = questions[index];
      expect(
        getByText(is_answered ? "Solved" : "Not answered")
      ).toHaveTextContent(is_answered ? "Solved" : "Not answered");
    });
  });
});

describe("QuestionList filtering", () => {
  const questions = questionData;
  render(
    <BrowserRouter>
      <QuestionList questions={questions} />
    </BrowserRouter>
  );
  const listItems = screen.getAllByRole("listitem");
});
