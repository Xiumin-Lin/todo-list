import React, { useContext } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../contexts/ThemeContext.js";

const TodoBis = ({ onClick, completed, text }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <li
      onClick={onClick}
      className={`flex-1 font-medium break-words overflow-hidden ${
        completed ? "line-through" : ""
      } w-full ${isDarkMode ? "text-white" : "text-black"}`}
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
