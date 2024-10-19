import React from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='container'>
        <h1 className='portfolio-header'>Портфолио</h1>
      </div>
      <div className='container'>
        <div className='portfolio-blocks'>
          <Link to='#!' className='portfolio-block-link'>
            <div className='portfolio-block'>
              <p className='portfolio-block-text'>
                IT компания Lunaris получила множество наград за свою работу над
                созданием корпоративных сайтов, интернет-магазинов и лендингов.
                В частности, компания была отмечена за высокое качество дизайна
                и функциональности сайтов, а также за умение удовлетворить
                потребности клиентов и предоставить им эффективные решения для
                онлайн-бизнеса.
              </p>
            </div>
          </Link>
          <Link to='#!' className='portfolio-block-link'>
            <div className='portfolio-block'>
              <p className='portfolio-block-text'>
                IT компания Lunaris имеет богатый опыт в создании сайтов для
                различных отраслей и целей. Наша команда профессионалов
                стремится создавать уникальные и эффективные решения, которые
                помогают нашим клиентам достичь своих бизнес-целей. Мы работаем
                с коммерческими, государственными и муниципальными заказчиками.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
