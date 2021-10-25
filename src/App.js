import React, { useState } from "react";
import Filter from "./components/Filters.js";
import AddTodo from "./containers/AddTodo.js";
import VisibleTodoList from "./containers/VisibleTodoList.js";
import ThemeContext from "./contexts/ThemeContext.js";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <React.Fragment>
      <div className="absolute mt-4 mr-4 right-0 ">
        <DarkModeToggle
          onChange={() => {
            setIsDarkMode(!isDarkMode);
            toggleTheme();
          }}
          checked={isDarkMode}
          className=" focus:outline-none"
        />
      </div>

      <ThemeContext.Provider value={{ theme }}>
        <div
          className={`h-screen w-full flex flex-col space-y-4 items-center justify-center ${
            theme === "dark" ? "bg-gray-900" : "bg-gray-300"
          }`}
        >
          <div
            className={`shadow-2xl ${
              theme === "dark" ? "bg-gray-900" : "bg-gray-200"
            } rounded-xl lg:w-3/4 lg:max-w-lg`}
          >
            <div
              style={{
                backgroundColor: "#ff4e00",
                backgroundImage:
                  "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
              }}
              className="rounded-t-xl"
            >
              <h1 className="text-5xl font-bold rounded-t-xl text-center text-white">
                To-do List
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
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
