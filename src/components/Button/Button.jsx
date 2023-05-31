import React from "react";
import "./button.css";

function Button({ variant, children, ...rest }) {
  return <button className={`button ${variant}`}>{children}</button>;
}

export default Button;
