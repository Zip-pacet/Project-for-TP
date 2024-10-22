import pkg from "pg";
const { Pool } = pkg; // Используем деструктуризацию из CommonJS импорта

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: "5432",
  database: "lunaris",
});

export default pool;
