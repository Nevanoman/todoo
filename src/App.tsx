import TodoList from "./components/TodoList/TodoList";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoFilter from "./components/TodoFilter/TodoFilter";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="word">Заметки</h1>
      <AddTodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
}

export default App;
