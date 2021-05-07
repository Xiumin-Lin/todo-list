import React from "react";
import { connect } from "react-redux";
import { ADD_ITEMS } from "./actionTypes";

function Todo({ dispatch }) {
  const [value, setValue] = React.useState("");
  const [date, setDate] = React.useState("");

  return (
    <React.Fragment>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setDate(new Date().getSeconds().toString());
        }}
      />
      <button
        onClick={function () {
          dispatch({
            type: ADD_ITEMS,
            value,
            date,
          });
          setValue("");
        }}
      >
        add
      </button>
    </React.Fragment>
  );
}

export default connect()(Todo);
