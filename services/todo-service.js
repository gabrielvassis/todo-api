import TodoRepository from "../repositories/todo-repository.js";

async function getTodos() {
  return await TodoRepository.getTodos();
}

async function createTodo(todo) {
  todo.done = false;
  return await TodoRepository.insertTodo(todo);
}

async function deleteTodo(id) {
  return await TodoRepository.deleteTodo(id);
}

async function updateTodo(todo) {
  return await TodoRepository.updateTodo(todo);
}

async function updateTodoDone(todo) {
  return await TodoRepository.updateTodoDone(todo);
}

export default {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  updateTodoDone,
};
