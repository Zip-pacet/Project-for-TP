import React from "react";
import { Link } from "react-router-dom";
import classes from "./googleForm.module.css";

function GoogleForm(props) {
  return (
    <Link
      onClick={props.function}
      to={props.link}
      target='_blank'
      className={classes.googleFormButton}
    >
      Оставить заявку
    </Link>
  );
}

export default GoogleForm;
