import React from "react";

import Login from "../login/Login";
import Signup from "../signup/Signup";

import "./LogOrSign.css";

const LogOrSign = () => {
  return (
    <div className="logorsign-wrapper">
      <Login />
      <Signup />
    </div>
  );
};

export default LogOrSign;
