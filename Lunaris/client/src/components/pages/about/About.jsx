import React from "react";
import "./about.css";
import AboutBlock from "./AboutBlock";
import { logolunaris2var, lunarisGroup } from "./../../../img/img_exports";

function About() {
  return (
    <section className='about'>
      <div className='container'>
        <h1 className='about-header'>О компании</h1>
      </div>

      <div className='container about-content'>
        <ul className='about-blocks'>
          <AboutBlock
            link={"/about/company"}
            text={
              "Наша компания имеет более чем 20-летний опыт непрерывного совершенствования своего мастерства в разработке и продвижении сайтов. За это время компанией было реализовано более 500 проектов для коммерческих, государственных и муниципальных заказчиков городов Воронежа, Москвы и других городов России."
            }
          />
          <AboutBlock
            link={"/about/staff"}
            text={
              "Сотрудники IT компании Lunaris, специализирующейся на создании сайтов, обладают высоким уровнем профессионализма и многолетним опытом работы в сфере веб-разработки. Они стремятся к постоянному совершенствованию своих навыков и следят за последними тенденциями в области дизайна и функциональности сайтов."
            }
          />
        </ul>
      </div>
    </section>
  );
}

export default About;
