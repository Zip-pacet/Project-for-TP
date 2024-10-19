import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
import ServicesImgBlock from "./servUi/clickableBlock/ServicesImgBlock";
import { cs5, la2, mp5 } from "./../../../img/img_exports";

function Services() {
  return (
    <div className='services'>
      <div className='container'>
        <h1 className='services-header'>Услуги</h1>
      </div>
      <div className='container'>
        <div className='services-blocks'>
          <div className='services-block'>
            <ServicesImgBlock
              link='/services/corp_site'
              title='КОРПОРАТИВНЫЙ САЙТ'
              imgSrc={cs5}
              text='Создадим современный корпоративный сайт, который поможет эффективно представить ваш бизнес в интернете и наладить коммуникацию с клиентами. Ваш сайт будет отражать ценности компании, и способствовать укреплению бренда.'
            />
          </div>
          <div className='services-block'>
            <ServicesImgBlock
              link='/services/marketplace'
              title='ИНТЕРНЕТ МАГАЗИН'
              imgSrc={la2}
              text='Разработаем удобный и функциональный интернет-магазин с интеграцией всех необходимых платежных и логистических систем. Ваши клиенты смогут легко найти и купить товары, а вы — управлять продажами через интуитивно понятную платформу.'
            />
          </div>
          <div className='services-block'>
            <ServicesImgBlock
              link='/services/landing'
              title='ЛЕНДИНГ'
              imgSrc={mp5}
              text='Создадим лендинг, который привлекает внимание и побуждает к действию. Мы поможем вам запустить эффективную рекламную кампанию и увеличить количество заявок или продаж с одной страницы.'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
