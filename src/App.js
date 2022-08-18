import "./App.css";
import React, { useState, useEffect } from "react";
import { getQuestions } from "./api";
import QuestionList from "./components/questionlist/QuestionList";

const AppContainer = ({ children }) => {
  return (
    <div className="App">
      <h1>Questions</h1>
      {children}
    </div>
  );
};

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  /* const [error, setError] = useState("");*/

  const fetchData = async () => {
    try {
      /*      const response = await api.getQuestions();

      console.log(response);*/
      /*
      if (response.ok === false) {
        setIsError(true);
        setIsLoading(false);
        setError(`Error: API call returned a status ${response.status}`);
        return;
      }
*/
      const data = await getQuestions();
      setQuestions(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        <p className="error">{"error"}. Is your server running?</p>
      </AppContainer>
    );
  }

  if (questions.length === 0) {
    return (
      <AppContainer>
        <p>No questions yet!</p>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <QuestionList />
    </AppContainer>
  );
}

export default App;
