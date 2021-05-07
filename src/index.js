import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { ADD_ITEMS } from "./actionTypes.js";

const initialState = {
  items: [],
  date: [],
};

let store = createStore(function (state, action) {
  console.log("[In create store]");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items: [...(state?.items || []), action.value],
        date: [action.date],
      };
    default:
      return <p>Nothing</p>;
  }
}, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
