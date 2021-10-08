import React from "react";
import PropsTypes from "prop-types";

function Statistics({ title, children }) {
  return (
    <>
      <h2> {title} </h2>
      {children}
    </>
  );
}

Statistics.defaultProps = {
  title: "",
};

Statistics.PropsTypes = {
  title: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
};

export default Statistics;
