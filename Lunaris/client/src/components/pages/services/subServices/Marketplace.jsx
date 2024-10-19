import React from "react";
import "./servicePages.css";
import { mp1, mp2, mp3, mp4 } from "../../../../img/img_exports";
import GoogleForm from "../servUi/googleForm/GoogleForm";
import WorkExamples from "../servUi/workExamples/WorkExamples";
import { trackYandexMetricaGoal } from "../../../../utils/YandexMetrica";

function Marketplace() {
  const handleFormClick = () => {
    trackYandexMetricaGoal(97091665, "proceedToCheckout");
    console.log("works"); // Safely track goal
  };
  return (
    <section className='work-details'>
      <div className='container'>
        <div>
          <h1 className='service-header'>Интернет магазин</h1>
          <div className='service-info'>
            <strong>
              <p>Стоимость: от 1 000 000 руб. Срок: от 90 рабочих дней.</p>
            </strong>
            <p>
              Интернет-магазин может быть хорошим подспорьем как уже
              существующему бизнесу, так и выступать в качестве основного канала
              продаж для недавно созданной компании.
            </p>
            <p>
              Непременными атрибутами интернет-магазина являются каталог товаров
              и корзина, позволяющая сформировать и отправить заказ. Часто
              создание интернет-магазина сопровождается связкой с внутренней
              системой учета товаров (например, 1С), CRM, подключением онлайн
              оплаты.
            </p>
            <p>
              Стоимость интернет-магазина сильно зависит от особенностей товара
              и существующих в компании бизнес-процессов. 
            </p>
          </div>

          <WorkExamples pic1={mp1} pic2={mp2} pic3={mp3} pic4={mp4} />
          <GoogleForm
            function={handleFormClick}
            link={
              "https://docs.google.com/forms/d/e/1FAIpQLSe6o_-bR0FA_ozj-lf4OWoxvAmpCLN-zhb556lWRRQHT8Pc-w/viewform?usp=sf_link"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Marketplace;
