import React from "react";
import "./homepageBody.css";
import { NewsBlockImg, cs5, la2, mp5 } from "./../../../img/img_exports";

import ImgBlock from "./homepageImgBlock/ImgBlock";
import { Link } from "react-router-dom";

const BlockHeader = ({ text }) => <h2 className='block-header'>{text}</h2>;

function DevBlock() {
  return (
    <div className='container'>
      <div className='block'>
        <BlockHeader text='РАЗРАБОТКА САЙТОВ' />
        <ul className='block-row'>
          <ImgBlock
            link='/services/corp_site'
            title='КОРПОРАТИВНЫЙ САЙТ'
            imgSrc={cs5}
            text='Корпоративный сайт положительно скажестся на имидже, выгодно отличит компанию от конкурентов.'
          />
          <ImgBlock
            link='/services/marketplace'
            title='ИНТЕРНЕТ МАГАЗИН'
            imgSrc={mp5}
            text='Разработаем интернет магазин и увеличим продажи.'
          />
          <ImgBlock
            link='/services/landing'
            title='ЛЕНДИНГ'
            imgSrc={la2}
            text='Лендинг - отличный вариант для продвижения услуг, проведения акций или рекламы нового товара.'
          />
        </ul>
      </div>
    </div>
  );
}

function NewsBlock() {
  return (
    <div className='container'>
      <div className='block'>
        <BlockHeader text='Новости и мероприятия' />
        <div className='news'>
          <Link to='/events'>
            <img className='newsImg' src={NewsBlockImg} alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Pluses() {
  const plusesColumn1 = [
    "Профессионализм",
    "Комплексный подход",
    "Контроль качества",
  ];
  const plusesColumn2 = [
    "Индивидуальный подход",
    "Баланс предложения",
    "Гарантийные обязательства",
  ];

  return (
    <div className='container'>
      <div className='block'>
        <BlockHeader text='НАШИ ДОСТОИНСТВА' />
        <div className='block-table'>
          <div className='block-table-column'>
            {plusesColumn1.map((plus, index) => (
              <div key={index} className='block-table-cell'>
                <p className='block-table-text'>{plus}</p>
              </div>
            ))}
          </div>
          <div className='block-table-column'>
            {plusesColumn2.map((plus, index) => (
              <div key={index} className='block-table-cell'>
                <p className='block-table-text'>{plus}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='adjust_about'>
          <AboutUs />
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className='container'>
      <div className='block'>
        <BlockHeader text='О НАС' />
        <div>
          <p className='about-us-text'>
            Наша команда профессионалов с богатым опытом работы в индустрии
            гарантирует высокое качество и инновационные подходы в каждом
            проекте. Мы стремимся превзойти ваши ожидания и помочь вам
            реализовать самые амбициозные идеи.
          </p>
        </div>
      </div>
    </div>
  );
}

function Homepage() {
  return (
    <div className='body'>
      <div className='container'>
        <div className='block'>
          <DevBlock />
          <div className='block'>
            <NewsBlock />
          </div>
          <div className='block'>
            <Pluses />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
