import React from "react";
import PropTypes from "prop-types";

const TodoBis = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
      width: "90%",
    }}
  >
    {text}
  </li>
);

TodoBis.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoBis;
