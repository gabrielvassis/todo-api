import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Todo = db.define("todos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  done: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

export default Todo;
