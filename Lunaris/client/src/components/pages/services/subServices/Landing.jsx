import React from "react";
import "./servicePages.css";
import { la1, la2, la3, la4 } from "../../../../img/img_exports";
import GoogleForm from "../servUi/googleForm/GoogleForm";
import WorkExamples from "../servUi/workExamples/WorkExamples";
import { trackYandexMetricaGoal } from "../../../../utils/YandexMetrica";

function Landing() {
  const handleFormClick = () => {
    trackYandexMetricaGoal(97091665, "proceedToCheckout"); // Safely track goal
  };
  return (
    <section className='work-details'>
      <div className='container'>
        <div>
          <h1 className='service-header'>Лендинг</h1>
          <div className='service-info'>
            <strong>
              <p>Стоимость: от 300 000 руб. Срок: от 15 рабочих дней.</p>
            </strong>
            <p>
              Посадочная страница («лендинг») - своего рода «мини-сайт»,
              состоящий из одной веб-страницы, содержащей все самое необходимое
              для принятия решения о покупке и последующем контакте с
              владельцем.  Задача лендинга — получить максимальную конверсию
              «посетитель-потенциальный клиент», принести владельцу как можно
              больше писем, звонков, покупок.
            </p>
            <p>
              Сайт - не книга, и на одну веб-страницу можно теоретически
              уместить сколь угодно много информации. Здесь главное не
              переусердствовать и вовремя почувствовать грань, когда посадочной
              странице уже пора превращаться в полноценный сайт с отдельными
              страницами, каждая из которых будет решать свою задачу.
            </p>
          </div>

          <WorkExamples pic1={la1} pic2={la2} pic3={la3} pic4={la4} />
          <GoogleForm
            function={handleFormClick}
            link={
              "https://docs.google.com/forms/d/e/1FAIpQLSdFepdOgA8ifDTVTFFhoKC3J0w_4oU_RSSN5-NWLZxnDUhd-g/viewform?usp=sf_link"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
