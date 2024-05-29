import { Middleware } from "@reduxjs/toolkit";

const localStorageMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const todos = storeAPI.getState().todos.todos;
  localStorage.setItem("todos", JSON.stringify(todos));
  return result;
};

export default localStorageMiddleware;
