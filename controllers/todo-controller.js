import todoService from "../services/todo-service.js";

async function createTodo(req, res, next) {
  try {
    let todo = req.body;
    if (!todo.title) {
      throw new Error("Title is required.");
    }
    todo = await todoService.createTodo(todo);
    res.send(todo);
  } catch (err) {
    next(err);
  }
}

async function getTodos(req, res, next) {
  try {
    res.send(await todoService.getTodos());
  } catch (err) {
    next(err);
  }
}

async function deleteTodo(req, res, next) {
  try {
    let id = req.params.id;
    res.send(await todoService.deleteTodo(id));
  } catch (err) {
    next(err);
  }
}

async function updateTodo(req, res, next) {
  try {
    let todo = req.body;
    if (!todo.title) {
      throw new Error("Title is required.");
    }
    todo = await todoService.updateTodo(todo);
    res.send(todo);
  } catch (err) {
    next(err);
  }
}

async function updateTodoDone(req, res, next) {
  try {
    let todo = req.body;
    todo = await todoService.updateTodoDone(todo);
    res.send(todo);
  } catch (err) {
    next(err);
  }
}

export default { createTodo, getTodos, deleteTodo, updateTodo, updateTodoDone };
