import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";

const RemoveTodo = ({ id, dispatch }) => {
  return (
    <button
      className={
        "p-3 focus:outline-none rounded-full font-bold text-white bg-red-600"
      }
      onClick={(e) => {
        e.preventDefault();
        dispatch(deleteTodo(id));

        console.log(dispatch(deleteTodo(id)));
      }}
    >
      <svg
        className={"w-5 h-5"}
        viewBox="0 0 15 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 4.16667H1.66667V15C1.66667 15.442 1.84226 15.866 2.15482 16.1785C2.46738 16.4911 2.89131 16.6667 3.33333 16.6667H11.6667C12.1087 16.6667 12.5326 16.4911 12.8452 16.1785C13.1577 15.866 13.3333 15.442 13.3333 15V4.16667H2.5ZM11.3483 1.66667L10 0H5L3.65167 1.66667H0V3.33333H15V1.66667H11.3483Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default connect()(RemoveTodo);
