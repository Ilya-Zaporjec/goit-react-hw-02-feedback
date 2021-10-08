import React from "react";
import PropsTypes from "prop-types";

function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.PropsTypes = {
  message: PropsTypes.string.isRequired,
};

export default Notification;
