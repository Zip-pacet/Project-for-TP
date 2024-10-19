// Communication.js
import React from "react";
import "./communication.css";
import ContactPerson from "./ContactPerson";

function Communication() {
  const contacts = [
    {
      name: "Иванов Андрей Сергеевич",
      position: "Директор по развитию",
      phone: "+7 (495) 123-45-67",
      email: "a.ivanov@lunaris.tech",
    },
    {
      name: "Петрова Елена Николаевна",
      position: "Руководитель отдела продаж",
      phone: "+7 (495) 234-56-78",
      email: "e.petrova@lunaris.tech",
    },
    {
      name: "Сидоров Михаил Павлович",
      position: "Технический директор",
      phone: "+7 (495) 345-67-89",
      email: "m.sidorov@lunaris.tech",
    },
    {
      name: "Кузнецов Алексей Дмитриевич",
      position: "Руководитель отдела поддержки клиентов",
      phone: "+7 (495) 456-78-90",
      email: "a.kuznetsov@lunaris.tech",
    },
  ];

  return (
    <div className='communication'>
      <div className='contacts-container'>
        <h2 className='contacts-title'>Контакты</h2>

        <div className='contacts-info-wrapper'>
          {/* Address Section */}
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

          {/* Contact Persons Section */}
          <div className='contacts-info'>
            <h3 className='contacts-subtitle'>Контактные лица:</h3>
            {contacts.map((contact, index) => (
              <ContactPerson
                key={index}
                name={contact.name}
                position={contact.position}
                phone={contact.phone}
                email={contact.email}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communication;
