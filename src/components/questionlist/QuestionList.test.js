import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import QuestionList from "./QuestionList";
import questionData from "../../data/questions.json";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";

const { server } = require("../../mocks/server");

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

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
  // const questions = questionData;
  const renderScreen = () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };

  test("renders only React topic questions", async () => {
    renderScreen();

    let topicDropdown;
    let topics;

    await waitFor(() => {
      topicDropdown = screen.getByTestId("topic-dropdown");
    });
    fireEvent.change(topicDropdown, { target: { value: "React" } });
    await waitFor(() => {
      expect(topicDropdown).toHaveValue("React");
    });
    await waitFor(() => {
      topics = screen.getAllByTestId("topic");
    });
    topics.forEach((topic) => {
      expect(topic).toHaveTextContent("React");
    });
    expect(topics).toHaveLength(3);
  });

  test("renders only Bugs topic questions", async () => {
    renderScreen();

    let topicDropdown;
    let topics;

    await waitFor(() => {
      topicDropdown = screen.getByTestId("topic-dropdown");
    });
    fireEvent.change(topicDropdown, { target: { value: "Bugs" } });
    await waitFor(() => {
      expect(topicDropdown).toHaveValue("Bugs");
    });
    await waitFor(() => {
      topics = screen.getAllByTestId("topic");
    });
    topics.forEach((topic) => {
      expect(topic).toHaveTextContent("Bugs");
    });
    expect(topics).toHaveLength(6);
  });

  test("renders only How-to topic questions", async () => {
    renderScreen();

    let topicDropdown;
    let topics;

    await waitFor(() => {
      topicDropdown = screen.getByTestId("topic-dropdown");
    });
    fireEvent.change(topicDropdown, { target: { value: "how-to" } });
    await waitFor(() => {
      expect(topicDropdown).toHaveValue("how-to");
    });
    await waitFor(() => {
      topics = screen.getAllByTestId("topic");
    });
    topics.forEach((topic) => {
      expect(topic).toHaveTextContent("how-to");
    });
    expect(topics).toHaveLength(6);
  });
});
