import React from "react";
import "./servicePages.css";
import { Serv1 } from "../../../../img/img_exports";
import GoogleForm from "../servUi/googleForm/GoogleForm";
import WorkExamples from "../servUi/workExamples/WorkExamples";

function Marketplace() {
  return (
    <section className='work-details'>
      <div className='container'>
        <div>
          <h1 className='service-header'>Интернет магазин</h1>
          <p className='service-info'>
            Стоимость: от 1 000 000 руб. Срок: от 90 рабочих дней.
          </p>
          <p>
            Интернет-магазин может быть хорошим подспорьем как уже существующему
            бизнесу, так и выступать в качестве основного канала продаж для
            недавно созданной компании.
          </p>
          <p>
            Непременными атрибутами интернет-магазина являются каталог товаров и
            корзина, позволяющая сформировать и отправить заказ. Часто создание
            интернет-магазина сопровождается связкой с внутренней системой учета
            товаров (например, 1С), CRM, подключением онлайн оплаты.
          </p>
          <p>
            Стоимость интернет-магазина сильно зависит от особенностей товара и
            существующих в компании бизнес-процессов. 
          </p>

          <GoogleForm />
          <WorkExamples pic1={Serv1} pic2={Serv1} />
        </div>
      </div>
    </section>
  );
}

export default Marketplace;
