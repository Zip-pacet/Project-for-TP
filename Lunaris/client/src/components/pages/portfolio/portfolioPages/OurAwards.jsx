import React from "react";
import "./ourAwards.css";
import AwardCard from "./AwardCard";
import {
  aw1,
  aw2,
  aw3,
  aw4,
  aw5,
  aw6,
  aw7,
  aw8,
} from "./../../../../img/img_exports";

function OurAwards() {
  const awards = [
    { title: "Lunaris Generations Innovation Award", image: aw1 },
    {
      title: "Обновленный сайт сети магазинов 'Спортмаг'",
      image: aw2,
    },
    { title: "Сайт КБ 'Энергопромбанк'", image: aw3 },
    { title: "Интернет-магазин 'Спорт есть'", image: aw4 },
    { title: "Группа компаний 'Сант-Плюс'", image: aw5 },
    {
      title: "Сайт Екатеринбургского муниципального банка",
      image: aw6,
    },
    { title: "Рекламное агентство 'Fine Design'", image: aw7 },
    { title: "Сайт компании 'Транснефтьпрогресс'", image: aw8 },
  ];

  return (
    <div className='awards'>
      <div className='awardsContainer'>
        <h1 className='title'>Наши Награды</h1>
        <p className='description'>
          Компания «Lunaris» участвует и побеждает во всероссийских
          интернет-конкурсах, что говорит о признании качества и оригинальности
          веб-решений компании на профессиональном уровне.
        </p>
        <div className='awardsGrid'>
          {awards.map((award, index) => (
            <AwardCard key={index} title={award.title} image={award.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurAwards;
