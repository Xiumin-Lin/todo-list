import React, { useContext } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../contexts/ThemeContext.js";

const TodoBis = ({ onClick, completed, text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <li
      onClick={onClick}
      className={`${completed ? "line-through" : ""} w-full ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      {text}
    </li>
  );
};

TodoBis.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoBis;
