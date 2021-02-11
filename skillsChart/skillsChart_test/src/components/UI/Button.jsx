import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  if (props.href) {
    return <a href={props.href}>{props.btnTxt}</a>;
  }
  if (props.to) {
    return (
      <Link to={props.to} exact={props.exact}>
        {props.btnTxt}
      </Link>
    );
  }
  return (
    <button type={props.type} onClick={props.onClick} disabled={props.disabled}>
      {props.btnTxt}
    </button>
  );
};

export default Button;
