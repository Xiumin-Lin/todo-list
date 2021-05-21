import React from "react";
import PropTypes from "prop-types";
import TodoBis from "./TodoBis";
import RemoveTodo from "../containers/RemoveTodo";

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <div class={"flex mb-4 items-center"}>
        <TodoBis key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        <RemoveTodo id={todo.id} />
      </div>
    ))}
  </ul>
);

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
