import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";

const RemoveTodo = ({ id, dispatch }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(deleteTodo(id));

          console.log(dispatch(deleteTodo(id)));
        }}
      >
        X
      </button>
    </div>
  );
};

export default connect()(RemoveTodo);
