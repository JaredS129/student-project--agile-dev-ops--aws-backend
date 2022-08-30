import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getQuestions, getTopics } from "./api";
import Header from "./components/Header";
import QuestionList from "./components/questionlist/QuestionList";
import AskQuestion from "./components/askquestion/AskQuestion";
import FullQuestion from "./components/fullquestion/FullQuestion";
import singleQuestion from "./data/singleQuestion.json";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [topics, setTopics] = useState([]);
  const [answered, setAnswered] = useState(undefined);
  const [topic, setTopic] = useState(undefined);

  const AppContainer = ({ children, searchText, setSearchText }) => {
    return (
      <div className="App">
        <Header searchText={searchText} setSearchText={setSearchText} />
        {children}
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuestions(answered, topic);
      const topicsData = await getTopics();

      if (data.error /*|| topicsData.error*/) {
        setIsError(true);
        setIsLoading(false);
        setError(`Error: API call returned a status ${data.error}`);
        return;
      }
      setQuestions(data.body);
      setTopics(topicsData.body);
      setIsLoading(false);
    };
    fetchData();
  }, [answered, topic]);

  if (isLoading) {
    return (
      <AppContainer>
        <p>Loading...</p>
      </AppContainer>
    );
  }

  if (isError) {
    return (
      <AppContainer>
        <p className="error">{error}. Is your server running?</p>
      </AppContainer>
    );
  }

  return (
    <AppContainer searchText={searchText} setSearchText={setSearchText}>
      <Routes>
        <Route
          path="/"
          element={
            <QuestionList
              questions={questions}
              searchText={searchText}
              answered={answered}
              setAnswered={setAnswered}
              topic={topic}
              setTopic={setTopic}
              topics={topics}
            />
          }
        ></Route>
        <Route
          path="/askQuestion"
          element={<AskQuestion topics={topics} />}
        ></Route>
        <Route
          path="/question/:id"
          element={<FullQuestion {...singleQuestion} />}
        ></Route>
      </Routes>
    </AppContainer>
  );
};

export default App;
