import React from "react";
import { connect } from "react-redux";

function List({ items }) {
  console.log("----" + items);
  if (items != null) {
    console.log("[List.js]");

    return (
      <ul>
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    );
  } else return <p>[List.js] Not any item !</p>;
}

const mapStateToProps = function (state) {
  console.log("[In mapStateToProps]");
  return { items: state.items };
};

export default connect(mapStateToProps)(List);
