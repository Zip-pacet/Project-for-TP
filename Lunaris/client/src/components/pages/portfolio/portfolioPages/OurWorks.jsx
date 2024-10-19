import React from "react";
import "./ourWorks.css";
import WorkItem from "./WorkItem";
import { we1, we2, we3, we4, we5, we6 } from "../../../../img/img_exports";

function OurWorks() {
  const works = [
    {
      id: 1,
      img: we1,
      title: "РАЗРАБОТКА САЙТА АО «ЭСК РУСГИДРО»",
      description: "Разработка сайта",
    },
    {
      id: 2,
      img: we2,
      title: "ПОДДЕРЖКА ИНТЕРНЕТ-ПОРТАЛА АКАДЕМИИ",
      description: "Поддержка сайта",
    },
    {
      id: 3,
      img: we3,
      title: "ПОДДЕРЖКА САЙТА МУЗЕЯ «МОСКВА И ИСТОРИЯ»",
      description: "Поддержка сайта",
    },
    {
      id: 4,
      img: we4,
      title: "ПОДДЕРЖКА САЙТА ГЛАВАРХИВА МОСКВЫ",
      description: "Поддержка сайта",
    },
    {
      id: 5,
      img: we5,
      title: "МОДЕРНИЗАЦИЯ САЙТА ПАО «КАМАЗ»",
      description: "Модернизация сайта",
    },
    {
      id: 6,
      img: we6,
      title: "ПОДДЕРЖКА САЙТА МУЗЕЯ ЭНЕРГЕТИКИ",
      description: "Поддержка сайта",
    },
  ];

  return (
    <section className='our-works'>
      <h2 className='works-title'>Наши работы</h2>
      <div className='works-grid'>
        {works.map((work) => (
          <WorkItem
            key={work.id}
            img={work.img}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </section>
  );
}

export default OurWorks;
