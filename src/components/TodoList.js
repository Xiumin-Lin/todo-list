import React, { useContext } from "react";
import PropTypes from "prop-types";
import TodoBis from "./TodoBis";
import RemoveTodo from "../containers/RemoveTodo";
import ThemeContext from "../contexts/ThemeContext";
import ClearTodos from "../containers/ClearTodos";

const TodoList = ({ todos, toggleTodo }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <ul style={{ maxHeight: "300px" }} className="overflow-y-scroll mb-4">
        {todos && (
          <>
            {todos.map((todo) => (
              <div
                className={`flex rounded px-3 py-2 mb-2 space-x-4 items-center ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-300"
                }`}
              >
                <TodoBis
                  key={todo.id}
                  {...todo}
                  onClick={() => toggleTodo(todo.id)}
                />
                <RemoveTodo id={todo.id} />
              </div>
            ))}
          </>
        )}
      </ul>
      {todos.length > 0 && (
        <div className="flex items-center justify-between">
          <ClearTodos />
          <div
            className={`font-medium ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {todos.length} tasks
          </div>
        </div>
      )}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
