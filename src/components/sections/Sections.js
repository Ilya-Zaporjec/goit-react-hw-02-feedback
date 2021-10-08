import React from "react";
import PropsTypes from "prop-types";
import style from "./Sections.module.css";

function Section({ title, children }) {
  return (
    <div className={style.box}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Section.defaultProps = {
  title: "",
};

Section.PropsTypes = {
  title: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
};

export default Section;
