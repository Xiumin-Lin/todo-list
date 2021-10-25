import React from "react";

import Filter from "./components/Filters.js";
import AddTodo from "./containers/AddTodo.js";
import VisibleTodoList from "./containers/VisibleTodoList.js";

function App() {
  return (
    <React.Fragment>
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="shadow-2xl bg-gray-900 rounded-xl lg:w-3/4 lg:max-w-lg ">
          <div
            style={{
              backgroundColor: "#ff4e00",
              backgroundImage:
                "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
            }}
            className="rounded-t-xl"
          >
            <h1 className="text-5xl font-bold rounded-t-xl text-center text-white">
              Todo List
            </h1>
          </div>

          <div className="mb-4 p-6 space-y-8">
            <div className="flex mt-4 justify-center">
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

export default App;
