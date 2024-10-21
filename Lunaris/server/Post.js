import { DataTypes } from "sequelize";
import sequelize from "./database.js";

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  picture: {
    type: DataTypes.STRING,
  },
});

export default Post; // Экспорт модели
