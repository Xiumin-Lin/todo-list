import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";

const RemoveTodo = ({ id, dispatch }) => {
  return (
    <div>
      <button
        className={
          "flex-no-shrink px-3 py-1 ml-2 border-2 rounded-xl font-bold text-red-600 border-red-600 hover:text-white hover:bg-red-600"
        }
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
