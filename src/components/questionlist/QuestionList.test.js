import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import QuestionList from "./QuestionList";
import questionData from "../../data/questions.json";
import sortedQuestions from "../../data/sortedQuestions.json";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import topics from "../../data/topics.json";

jest.mock("axios");

axios.get.mockImplementation(topics);

jest.mock();

const { server } = require("../../mocks/server");

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe("QuestionList", () => {
  const renderQuestions = () => {
    render(
      <BrowserRouter>
        <QuestionList questions={questions} />
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
/*
describe("QuestionList filtering", () => {
  const questions = questionData;
  const renderScreen = () => {
    render(
      <BrowserRouter>
        <QuestionList questions={questions} />
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
*/
