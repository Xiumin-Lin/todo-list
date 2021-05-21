import React from "react";

import Filter from "./components/Filters.js";
import AddTodo from "./containers/AddTodo.js";
import VisibleTodoList from "./containers/VisibleTodoList.js";

function App() {
  return (
    <React.Fragment>
      <h1>Todo List</h1>

      <div>
        <AddTodo />
        <VisibleTodoList />
        <Filter />
      </div>
    </React.Fragment>
  );
}
/** */
export default App;
