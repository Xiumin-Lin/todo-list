import React from "react";
import { connect } from "react-redux";

function List({ items }) {
  if (items != null) {
    return (
      <ul>
        {items.map((item, idx) => {
          //TODO better use custom key than the index
          return (
            <li key={idx}>
              <input type="checkbox" name={item} />
              <label>{item}</label>
              <button
                type="button"
                onClick={() => {
                  items.splice(idx, 1);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    );
  } else return <p>[List.js] Not any item !</p>;
}

const mapStateToProps = function (state) {
  console.log("[In mapStateToProps]"); // DEBUG
  return { items: state.items };
};

export default connect(mapStateToProps)(List);
