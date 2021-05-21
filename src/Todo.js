import React from "react";
import { connect } from "react-redux";
import { ADD_ITEMS } from "./actionTypes";

function Todo({ dispatch }) {
  const [value, setValue] = React.useState("");
  const [date, setDate] = React.useState("");

  return (
    <React.Fragment>
      <form
        onSubmit={function (e) {
          e.preventDefault();
          dispatch({
            type: ADD_ITEMS,
            value,
            date,
          });
          setValue("");
        }}
      >
        <input
          required
          type="text"
          value={value}
          onChange={(e) => {
            setDate(new Date().getSeconds().toString());
            //TODO : new Date().toLocaleDateString()
            setValue(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  );
}

export default connect()(Todo);
