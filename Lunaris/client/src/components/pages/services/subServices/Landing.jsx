import React from "react";
import "./servicePages.css";
import { Serv1 } from "../../../../img/img_exports";
import GoogleForm from "../servUi/googleForm/GoogleForm";
import WorkExamples from "../servUi/workExamples/WorkExamples";

function Landing() {
  return (
    <section className='work-details'>
      <div className='container'>
        <div>
          <h1 className='service-header'>Лэндинг</h1>
          <p className='service-info'>
            Стоимость: от 300 000 руб. Срок: от 15 рабочих дней.
          </p>
          <p>
            Посадочная страница («лэндинг») - своего рода «мини-сайт», состоящий
            из одной веб-страницы, содержащей все самое необходимое для принятия
            решения о покупке и последующем контакте с владельцем.  Задача
            лэндинга — получить максимальную конверсию «посетитель-потенциальный
            клиент», принести владельцу как можно больше писем, звонков,
            покупок.
          </p>
          <p>
            Сайт - не книга, и на одну веб-страницу можно теоретически уместить
            сколь угодно много информации. Здесь главное не переусердствовать и
            вовремя почувствовать грань, когда посадочной странице уже пора
            превращаться в полноценный сайт с отдельными страницами, каждая из
            которых будет решать свою задачу.
          </p>

          <GoogleForm />
          <WorkExamples pic1={Serv1} pic2={Serv1} />
        </div>
      </div>
    </section>
  );
}

export default Landing;
