import { render, screen, within } from "@testing-library/react";
import QuestionList from "./QuestionList";

describe("QuestionList", () => {
  const questions = [
    {
      id: 1,
      title: "Question 1",
      topic: "React",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      isAnswered: true,
    },
    {
      id: 2,
      title: "Question 2",
      topic: "React",
      summary: "Lorem ipsum dolor sit ",
      isAnswered: false,
    },
    {
      id: 3,
      title: "Question 3",
      topic: "Express",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius",
      isAnswered: false,
    },
    {
      id: 4,
      title: "Question 4",
      topic: "PostgresSQL",
      summary: "Lorem ipsum dolor sit amet, consectet",
      isAnswered: true,
    },
  ];

  test("renders a list of questions", () => {
    render(<QuestionList items={questions} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(4);
  });

  test("renders the correct titles", () => {
    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((item, index) => {
      const { getByRole } = within(item);
      const { title } = questions[index];
      expect(getByRole("heading", { level: 3 })).toHaveTextContent(title);
    });
  });

  test("renders the correct summaries", () => {
    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { summary } = questions[index];
      expect(getByText(summary)).toBeInTheDocument();
    });
  });

  test("renders the correct topic", () => {
    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { topic } = questions[index];
      expect(getByText(topic)).toBeInTheDocument();
    });
  });

  test("renders the correct answered status", () => {
    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { isAnswered } = questions[index];
      expect(
        getByText(isAnswered ? "Solved" : "Not answered")
      ).toBeInTheDocument();
    });
  });
});
