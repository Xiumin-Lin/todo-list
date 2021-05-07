import React from "react";
import Todo from "./Todo.js";
import List from "./List.js";

function App() {
  return (
    <React.Fragment>
      <h1>Todo List</h1>
      <Todo />
      <List />
    </React.Fragment>
  );
}

export default App;
