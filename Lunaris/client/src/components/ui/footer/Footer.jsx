import React, { useState } from "react";
import "./footer.css";
import { logo_footer } from "./../../../img/img_exports";
import AdminLogin from "../adminLogin/AdminLogin";

function Footer() {
  const [authModal, setAuthModal] = useState(false);

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_text'>
          <AdminLogin authModal={authModal} setAuthModal={setAuthModal} />
          <p>
            Адрес: 394000, Россия, г. Воронеж, ул. Абсолютно Реальная 662 этаж,
            офис 288
          </p>
          <p>Телефон: +7-800-858-00-85</p>
        </div>
        <div className='footer_logo'>
          <img
            src={logo_footer}
            alt='Logo'
            className='footer-logo'
            onClick={() => setAuthModal(true)}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
