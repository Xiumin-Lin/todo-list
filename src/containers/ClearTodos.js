import React from "react";
import { connect } from "react-redux";
import { clearTodos } from "../actions";

const ClearTodos = ({ dispatch }) => {
  return (
    <button
      className={
        "p-3 bg-red-600 focus:outline-none rounded-lg font-bold text-white"
      }
      onClick={() => dispatch(clearTodos())}
    >
      Clear
    </button>
  );
};

export default connect()(ClearTodos);
