import { TodoList, TodoFilter, AddTodoForm } from "./components";

import "./App.css";

export function App() {
  return (
    <div className="app">
      <h1 className="word">Заметки</h1>
      <AddTodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
}
