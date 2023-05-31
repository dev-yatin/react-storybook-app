import React from "react";
import "./input.css";

function Input({ size, ...rest }) {
  return <input className={`input ${size}`} {...rest} />;
}

export default Input;
