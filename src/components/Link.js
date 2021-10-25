import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => (
  <button
    className={
      "flex-no-shrink px-3 py-1 ml-2 border-2 rounded-lg font-bold hover:text-blue-600 border-blue-600 text-white bg-blue-600 hover:bg-white"
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
