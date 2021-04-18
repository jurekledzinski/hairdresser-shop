import React from "react";
import { useSelector } from "react-redux";

import "./ErrorSuccessMessages.scss";

const ErrorSuccessMessages = () => {
  let dataAlert = useSelector((store) => store.alertData);
  const { errorServerMsg, successServerMsg, where } = dataAlert;

  console.log(dataAlert);

  switch (where) {
    case "default":
      return (
        <p
          className={
            Boolean(errorServerMsg)
              ? "alert-server"
              : "alert-server alert-server--success"
          }
        >
          {errorServerMsg || successServerMsg}
        </p>
      );
    case "registerForm":
      return (
        <p
          className={
            Boolean(errorServerMsg)
              ? "alert-server alert-server--error-register"
              : "alert-server alert-server--success-register"
          }
        >
          {errorServerMsg || successServerMsg}
        </p>
      );
    default:
      return null;
  }
};

export default ErrorSuccessMessages;
