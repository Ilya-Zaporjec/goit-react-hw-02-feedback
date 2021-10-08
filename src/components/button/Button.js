import React from "react";
import PropsTypes from "prop-types";
import style from "./Button.module.css";

function Button({ onLeaveFeedback }) {
  return (
    <div className={style.wrapper}>
      <button
        type="button"
        className={style.button}
        data-name="good"
        onClick={onLeaveFeedback}
      >
        {" "}
        Good
      </button>
      <button
        type="button"
        className={style.button}
        data-name="neutral"
        onClick={onLeaveFeedback}
      >
        {" "}
        Neutral
      </button>
      <button
        type="button"
        className={style.button}
        data-name="bad"
        onClick={onLeaveFeedback}
      >
        {" "}
        Bad{" "}
      </button>
    </div>
  );
}

Button.PropsTypes = {
  onLeaveFeedback: PropsTypes.func.isRequired,
};

export default Button;
