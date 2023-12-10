import TodoRepository from "../repositories/todo-repository.js";

async function getTodos() {
  return await TodoRepository.getTodos();
}

async function createTodo(todo) {
  todo.done = false;
  return await TodoRepository.insertTodo(todo);
}

export default {
  getTodos,
  createTodo,
};
