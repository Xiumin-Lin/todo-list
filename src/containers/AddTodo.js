import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form
      class={"flex w-full"}
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
        class={"shadow appearance-none border rounded-xl w-full py-2 px-3 mr-4"}
        placeholder={"Add Todo"}
        ref={(node) => (input = node)}
      />
      <button
        class={
          "px-3 py-1 flex-no-shrink p-2 border-2 rounded-xl text-green-600 font-bold border-green-600 hover:text-white hover:bg-green-600"
        }
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default connect()(AddTodo);
