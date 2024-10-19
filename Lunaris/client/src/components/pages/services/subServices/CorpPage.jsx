import React from "react";
import "./servicePages.css";
import { cs1, cs2, cs3, cs4 } from "../../../../img/img_exports";
import GoogleForm from "../servUi/googleForm/GoogleForm";
import WorkExamples from "../servUi/workExamples/WorkExamples";
import { trackYandexMetricaGoal } from "../../../../utils/YandexMetrica";

function CorpPage() {
  const handleFormClick = () => {
    trackYandexMetricaGoal(97091665, "proceedToCheckout"); // Safely track goal
  };
  return (
    <section className='work-details'>
      <div className='container'>
        <div>
          <h1 className='service-header'>Корпоративный сайт</h1>
          <div className='service-info'>
            <strong>
              <p>Стоимость: от 500 000 руб. Срок: от 60 рабочих дней.</p>
            </strong>
            <p>
              Корпоративный сайт - хороший вариант как для солидной, давно
              существующей на рынке компании, так и для новой фирмы, планирующей
              сразу и громко заявить о себе.
            </p>
            <p>
              Создание корпоративного сайта особенно эффективно в тех случаях,
              когда на рынке присутствует плотная конкуренция, и многие
              потенциальные клиенты составляют мнение о компании после изучения
              ее сайта. Вполне естественно, что при прочих равных, предпочтение
              отдается той компании, которая сумела представить себя в интернете
              наиболее выгодным образом.
            </p>
            <p>
              В случае разработки корпоративного сайта, дизайн создается с
              «нуля». Созданию дизайна часто предшествует работа по созданию
              прототипов ключевых страниц, которые позволяют на ранних этапах
              более точно подстроится под целевую аудиторию, расставить акценты
              в нужных местах.
            </p>
            <p>
              На корпоративном сайте, в отличие от экономичных решений, более
              подробно представлена информация о компании, товарах и услугах,
              применяются индивидуальные элементы дизайна и взаимодействия.
            </p>
          </div>
          <WorkExamples pic1={cs3} pic2={cs2} pic3={cs1} pic4={cs4} />
          <div className='form_button'>
            <GoogleForm
              function={handleFormClick}
              link={
                "https://docs.google.com/forms/d/e/1FAIpQLSfbewCabx_rkugiCj-nxorJ8_lq64adJj9yHRyYA2wIVc7HUw/viewform?usp=sf_link"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorpPage;
