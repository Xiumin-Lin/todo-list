import React from "react";
import { connect } from "react-redux";

function List({ items, date }) {
  console.log("----" + items);
  console.log(date);
  if (items != null) {
    console.log("[List.js]");

    return (
      <ul>
        {items.map((item) => {
          return (
            <li key={item}>
              {item} - {date}
            </li>
          );
        })}
      </ul>
    );
  } else return <p>[List.js] Not any item !</p>;
}

const mapStateToProps = function (state) {
  console.log("[In mapStateToProps]");
  return { items: state.items, date: state.date };
};

export default connect(mapStateToProps)(List);
