import "./App.css";
import React, { useState, useEffect } from "react";

const AppContainer = ({ children }) => {
  return (
    <div className="App">
      <h1>Todos</h1>
      {children}
    </div>
  );
};

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("/api/todos");

      console.log(response.ok);

      if (response.ok === false) {
        setIsError(true);
        setIsLoading(false);
        setError(`Error: API call returned a status ${response.status}`);
        return;
      }

      const todos = await response.json();
      setTodos(todos);
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
        <p className="error">{error}. Is your server running?</p>
      </AppContainer>
    );
  }

  if (todos.length === 0) {
    return (
      <AppContainer>
        <p>No todo's yet!</p>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </AppContainer>
  );
}

export default App;
