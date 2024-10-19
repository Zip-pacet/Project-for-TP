import React from "react";
import { Link } from "react-router-dom";
import "./services.css";

function Services() {
  return (
    <div className='services'>
      <div className='container'>
        <h1 className='services-header'>Услуги</h1>
      </div>
      <div className='container'>
        <div className='services-blocks'>
          <Link to='/corp_site' className='services-block-link'>
            <div className='services-block'>
              <p className='services-block-text'>Text piece 1</p>
            </div>
          </Link>
          <Link to='/marketplace' className='services-block-link'>
            <div className='services-block'>
              <p className='services-block-text'>Text piece 2</p>
            </div>
          </Link>
          <Link to='/landing' className='services-block-link'>
            <div className='services-block'>
              <p className='services-block-text'>Text piece 3</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
