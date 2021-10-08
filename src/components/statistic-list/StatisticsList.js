import React from "react";
import style from "./StatisticsList.module.css";
import PropsTypes from "prop-types";

function ListStatistics({ good, neutral, bad, total, positive }) {
  return (
    <ul className={style.ullist}>
      <li className={style.item}>Good: {good}</li>
      <li className={style.item}>Neutral:{neutral} </li>
      <li className={style.item}>Bad: {bad}</li>
      <li className={style.item}>Total:{total} </li>
      <li className={style.item}>Positive Feedback: {positive}</li>
    </ul>
  );
}

ListStatistics.defaultProps = {
  good: "",
  neutral: "",
  bad: "",
};

ListStatistics.PropsTypes = {
  good: PropsTypes.string.isRequired,
  neutral: PropsTypes.string.isRequired,
  bad: PropsTypes.string.isRequired,
  total: PropsTypes.number.isRequired,
  positive: PropsTypes.number,
};

export default ListStatistics;
