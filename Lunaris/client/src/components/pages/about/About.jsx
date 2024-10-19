import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
function About() {
  return (
    <div className='about'>
      <div className='container'>
        <h1 className='about-header'>О КОМПАНИИ</h1>
      </div>
      <div className='container'>
        <div className='about-blocks'>
          <Link to='#!' className='about-block-link'>
            <div className='about-block'>
              <p className='about-block-text'>
                Компания "Lunaris" имеет более чем 20-летний опыт непрерывного
                совершенствования своего мастерства в разработке и продвижении
                сайтов. За это время компанией было реализовано более 500
                проектов для коммерческих, государственных и муниципальных
                заказчиков городов Воронежа, Москвы и других городов России.
              </p>
            </div>
          </Link>
          <Link to='#!' className='about-block-link'>
            <div className='about-block'>
              <p className='about-block-text'>
                Сотрудники IT компании Lunaris, специализирующейся на создании
                сайтов, обладают высоким уровнем профессионализма и многолетним
                опытом работы в сфере веб-разработки. Они стремятся к
                постоянному совершенствованию своих навыков и следят за
                последними тенденциями в области дизайна и функциональности
                сайтов.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
