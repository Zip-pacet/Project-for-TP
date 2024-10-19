import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../../../../ui/button/MyButton";

function GoogleForm() {
  return (
    <Link
      to='https://docs.google.com/forms/d/e/1FAIpQLScMkqQMrM08tx11qjL17hnMdeFwd0mqxItb1d9PkexnUbXR2Q/viewform?embedded=true'
      target='_blank'
    >
      <MyButton>Оставить заявку</MyButton>
    </Link>
  );
}

export default GoogleForm;
