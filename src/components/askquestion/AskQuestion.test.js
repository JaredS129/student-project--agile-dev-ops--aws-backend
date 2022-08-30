import { render, screen, fireEvent } from "@testing-library/react";
import AskQuestion from "./AskQuestion.js";
import topics from "../../data/topics.json";

test("renders ask question component", () => {
  render(<AskQuestion topics={topics}></AskQuestion>);
  expect(screen.getByText("Title:")).toBeInTheDocument();
  expect(screen.getByText("What have you worked on?")).toBeInTheDocument();
  expect(
    screen.getByText("What are you trying to achieve?")
  ).toBeInTheDocument();
  expect(
    screen.getByText("What is the issue you are having?")
  ).toBeInTheDocument();
  expect(screen.getByText("What have you attempted?")).toBeInTheDocument();
});

test("topic selector starts with None displayed", async () => {
  render(<AskQuestion topics={[]} />);
  expect(screen.getByTestId("topic-dropdown")).toBeInTheDocument();
  expect(screen.getByTestId("topic-dropdown")).toHaveDisplayValue("None");
});

test("topic selector sets topic to correct value", async () => {
  const testTopics = [
    { topic_id: "1", topic_name: "TEST1" },
    { topic_id: "2", topic_name: "TEST2" },
    { topic_id: "3", topic_name: "TEST3" },
  ];
  render(<AskQuestion topics={testTopics} />);
  const topicDropdown = screen.getByTestId("topic-dropdown");
  expect(topicDropdown).toHaveDisplayValue("None");
  fireEvent.change(topicDropdown, { target: { value: "TEST1" } });
  expect(topicDropdown).toHaveDisplayValue("TEST1");
  fireEvent.change(topicDropdown, { target: { value: "TEST2" } });
  expect(topicDropdown).toHaveDisplayValue("TEST2");
  fireEvent.change(topicDropdown, { target: { value: "TEST3" } });
  expect(topicDropdown).toHaveDisplayValue("TEST3");
});
