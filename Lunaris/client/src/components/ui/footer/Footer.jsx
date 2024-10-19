import React from "react";
import "./footer.css";
import logo from "../../../img/logo.jpg";

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_text'>
          <p>
            Адрес: 394000, Россия, г. Воронеж, ул. Абсолютно Реальная 662 этаж,
            офис 288
          </p>
          <p>Телефон: +7-800-555-35-35</p>
        </div>
        <div className='footer_logo'>
          <img src={logo} alt='Logo' className='footer-logo' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
