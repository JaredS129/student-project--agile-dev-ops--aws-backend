import { render, screen, fireEvent } from "@testing-library/react";
import FilterForm from "./FilterForm";
import topics from "../../data/topics.json";

test("renders the dropdown boxes", async () => {
  render(<FilterForm topics={topics} />);
  expect(screen.getAllByRole("combobox")).toHaveLength(2);
});

test("topic selector starts with All displayed", async () => {
  render(<FilterForm topics={[]} />);
  expect(screen.getByTestId("topic-dropdown")).toBeInTheDocument();
  expect(screen.getByTestId("topic-dropdown")).toHaveDisplayValue("All");
});

test("topic selector sets topic to correct value", async () => {
  let topic = undefined;
  const setTopic = (e) => {
    topic = e;
  };
  const testTopics = [
    { topic_id: "1", topic_name: "TEST1" },
    { topic_id: "2", topic_name: "TEST2" },
    { topic_id: "3", topic_name: "TEST3" },
  ];
  render(<FilterForm topics={testTopics} topic={topic} setTopic={setTopic} />);
  const topicDropdown = screen.getByTestId("topic-dropdown");
  expect(topic).toBe(undefined);
  fireEvent.change(topicDropdown, { target: { value: "TEST1" } });
  expect(topic).toBe("TEST1");
  fireEvent.change(topicDropdown, { target: { value: "TEST2" } });
  expect(topic).toBe("TEST2");
  fireEvent.change(topicDropdown, { target: { value: "TEST3" } });
  expect(topic).toBe("TEST3");
});
