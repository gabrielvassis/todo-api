import Todo from "../models/todo-model.js";

async function insertTodo(todo) {
  try {
    return await Todo.create(todo);
  } catch (err) {
    throw err;
  }
}

async function getTodos() {
  try {
    return await Todo.findAll({
      order: [
        ["done", "ASC"],
        ["id", "ASC"],
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function deleteTodo(id) {
  try {
    return await Todo.destroy({
      where: {
        id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateTodo(todo) {
  try {
    await Todo.update(todo, {
      where: {
        id: todo.id,
      },
    });
    return await Todo.findByPk(todo.id);
  } catch (err) {
    throw err;
  }
}

async function updateTodoDone(todo) {
  try {
    await Todo.update(todo, {
      where: {
        id: todo.id,
      },
    });
    return await Todo.findByPk(todo.id);
  } catch (err) {
    throw err;
  }
}

export default {
  insertTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  updateTodoDone,
};
