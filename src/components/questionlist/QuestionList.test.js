import { render, screen, waitFor, within } from "@testing-library/react";
import QuestionList from "./QuestionList";
import questionData from "../../data/questions.json";
import sortedQuestions from "../../data/sortedQuestions.json";
import { BrowserRouter } from "react-router-dom";
import topics from "../../data/topics.json";

describe("QuestionList", () => {
  const renderQuestions = () => {
    render(
      <BrowserRouter>
        <QuestionList questions={questions} topics={topics} />
      </BrowserRouter>
    );
  };

  const questions = questionData;

  let listItems;

  test("renders a list of questions", async () => {
    renderQuestions();
    await waitFor(() => {
      listItems = screen.getAllByRole("listitem");
    });
    expect(listItems).toHaveLength(questions.length);
  });

  test("renders the correct titles", async () => {
    renderQuestions();
    await waitFor(() => {
      listItems = screen.getAllByRole("listitem");
    });
    listItems.forEach((item, index) => {
      const { getByRole } = within(item);
      const { title } = sortedQuestions[index];
      expect(getByRole("heading", { level: 3 })).toHaveTextContent(title);
    });
  });

  test("renders the correct summaries", async () => {
    renderQuestions();
    await waitFor(() => {
      listItems = screen.getAllByRole("listitem");
    });
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { summary } = sortedQuestions[index];
      expect(getByText(summary)).toHaveTextContent(summary);
    });
  });

  test("renders the correct topic", async () => {
    renderQuestions();
    await waitFor(() => {
      listItems = screen.getAllByRole("listitem");
    });
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { topic } = sortedQuestions[index];
      expect(getByText(topic)).toHaveTextContent(topic);
    });
  });

  test("renders the correct answered status", async () => {
    renderQuestions();
    await waitFor(() => {
      listItems = screen.getAllByRole("listitem");
    });
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { is_answered } = sortedQuestions[index];
      expect(
        getByText(is_answered ? "Solved" : "Not answered")
      ).toHaveTextContent(is_answered ? "Solved" : "Not answered");
    });
  });
});
