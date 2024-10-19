import React from "react";
import "./staff.css";
import EmployeeCard from "./EmployeeCard";
import {
  em1,
  em2,
  em3,
  em4,
  em5,
  em6,
  em7,
  em8,
} from "./../../../../img/img_exports";

function Staff() {
  const employees = [
    { name: "ДАНИИЛ", role: "Backend Developer", image: em1 },
    { name: "ЕГОР", role: "Team Lead PHP", image: em2 },
    {
      name: "ЕКАТЕРИНА",
      role: "PHP Developer / Frontend Developer",
      image: em3,
    },
    { name: "АЛЕКСАНДР", role: "Руководитель техподдержки", image: em4 },
    {
      name: "МАРГО",
      role: "Менеджер по подбору персонала",
      image: em5,
    },
    { name: "ИРИНА", role: "PHP Developer", image: em6 },
    { name: "ВЛАДИМИР", role: "Java Developer", image: em7 },
    { name: "ЕВГЕНИЙ", role: "Генеральный директор", image: em8 },
  ];

  return (
    <section className='staff'>
      <div className='staffContainer'>
        <h1 className='title'>Сотрудники</h1>
        <p className='description'>
          Все наши сотрудники имеют многолетний опыт работы и являются
          высококлассными специалистами. Специалисты с радостью ответят на все
          интересующие вопросы и проконсультируют по оптимальным решениям с
          учетом специфики вашего бизнеса.
        </p>
        <div className='employeeGrid'>
          {employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              name={employee.name}
              role={employee.role}
              image={employee.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Staff;
