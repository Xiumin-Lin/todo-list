import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => (
  <button
    style={{
      backgroundColor: "#ff4e00",
      backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
    }}
    className={
      "flex-no-shrink px-3 py-2 ml-2 focus:outline-none rounded-lg font-bold text-white"
    }
    onClick={onClick}
    disabled={active}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
