import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form
      className={"flex w-full"}
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value, new Date().toLocaleString()));
        input.value = "";
      }}
    >
      <input
        className={
          "shadow appearance-none border rounded-xl focus:outline-none w-full py-2 px-3 mr-4"
        }
        placeholder={"Add Todo"}
        ref={(node) => (input = node)}
      />
      <button
        className={
          "px-3 py-1 flex-no-shrink p-2 border-2 rounded-xl focus:outline-none text-white hover:text-green-600 font-bold border-green-600 bg-green-600 hover:bg-white"
        }
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default connect()(AddTodo);
