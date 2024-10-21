import express from "express";
import fileUpload from "express-fileupload";
import router from "./router.js";
import cors from "cors";
import { Sequelize } from "sequelize"; // Импортируем Sequelize

const PORT = process.env.PORT || 3001; // Указываем порт, на котором будет работать сервер

const DB_URL = {
  user: "postgres",
  host: "localhost", // Укажите ваш хост
  database: "postgres", // Укажите имя вашей базы данных
  password: "postgres",
  port: 5432, // Стандартный порт для PostgreSQL
};

// Создаем экземпляр Sequelize с параметрами подключения и настройками пула
const sequelize = new Sequelize(DB_URL.database, DB_URL.user, DB_URL.password, {
  host: DB_URL.host,
  dialect: "postgres",
  pool: {
    max: 5, // Максимальное количество соединений в пуле
    min: 0, // Минимальное количество соединений в пуле
    acquire: 30000, // Максимальное время ожидания для получения соединения
    idle: 10000, // Максимальное время ожидания перед закрытием неиспользуемого соединения
  },
});

const app = express();

app.use(
  cors({
    exposedHeaders: ["x-total-count"], // Указываем, что заголовок 'x-total-count' должен быть видимым на стороне клиента
  })
);

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
  try {
    // Проверяем соединение с PostgreSQL
    await sequelize.authenticate(); // Проверяем соединение с базой данных через Sequelize
    console.log(
      "Connection to the database has been established successfully."
    );

    // Синхронизируем модели с базой данных
    await sequelize.sync(); // Это создаст таблицы, если их нет, и обновит существующие таблицы
    console.log("All models were synchronized successfully.");

    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log("Unable to connect to the database:", e);
  }
}

startApp();
