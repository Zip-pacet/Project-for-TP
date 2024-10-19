import React from "react";
import "./communication.css";

function Communication() {
  return (
    <div className='communication'>
      <div className='contacts-container'>
        <h2 className='contacts-title'>Контакты</h2>
        <div className='contacts-info'>
          <h3 className='contacts-subtitle'>Наш адрес:</h3>
          <p className='contacts-description'>
            Lunaris Technologies LLC
            <br />
            ул. Абсолютно Реальная 662 этаж, офис 288
            <br />
            Воронеж, 394000, Россия
          </p>
        </div>

        <div className='contacts-info'>
          <h3 className='contacts-subtitle'>Контактные лица:</h3>

          <div className='contact-person'>
            <p className='contact-name'>Иванов Андрей Сергеевич</p>
            <p className='contact-position'>Директор по развитию</p>
            <p className='contact-phone'>Телефон: +7 (495) 123-45-67</p>
            <p className='contact-email'>Email: a.ivanov@lunaris.tech</p>
          </div>

          <div className='contact-person'>
            <p className='contact-name'>Петрова Елена Николаевна</p>
            <p className='contact-position'>Руководитель отдела продаж</p>
            <p className='contact-phone'>Телефон: +7 (495) 234-56-78</p>
            <p className='contact-email'>Email: e.petrova@lunaris.tech</p>
          </div>

          <div className='contact-person'>
            <p className='contact-name'>Сидоров Михаил Павлович</p>
            <p className='contact-position'>Технический директор</p>
            <p className='contact-phone'>Телефон: +7 (495) 345-67-89</p>
            <p className='contact-email'>Email: m.sidorov@lunaris.tech</p>
          </div>

          <div className='contact-person'>
            <p className='contact-name'>Кузнецов Алексей Дмитриевич</p>
            <p className='contact-position'>
              Руководитель отдела поддержки клиентов
            </p>
            <p className='contact-phone'>Телефон: +7 (495) 456-78-90</p>
            <p className='contact-email'>Email: a.kuznetsov@lunaris.tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communication;
