import { Sequelize } from "sequelize";

const DB_URL = {
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
};

const sequelize = new Sequelize(DB_URL.database, DB_URL.user, DB_URL.password, {
  host: DB_URL.host,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error.message); // Выводим сообщение об ошибке
    console.error("Error details:", error); // Выводим детали ошибки
  }
}

testConnection();

export default sequelize;
