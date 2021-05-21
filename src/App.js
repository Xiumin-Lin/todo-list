import React from "react";

import Filter from "./components/Filters.js";
import AddTodo from "./containers/AddTodo.js";
import VisibleTodoList from "./containers/VisibleTodoList.js";

function App() {
  return (
    <React.Fragment>
      <div class="h-screen w-full flex items-center justify-center font-mono bg-gray-400">
        <div class="bg-white rounded-xl shadow lg:w-3/4 lg:max-w-lg">
          <h1 class="text-5xl font-black rounded-t-xl bg-blue-600 text-center text-white">
            Todo List
          </h1>
          <div class="mb-4 p-6 space-y-8">
            <div class="flex mt-4 justify-center">
              <AddTodo />
            </div>
            <VisibleTodoList />
            <Filter />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
/** */
export default App;
