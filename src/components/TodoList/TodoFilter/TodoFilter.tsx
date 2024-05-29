interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type Filter = "all" | "completed" | "active";

const TodoFilter = (todos: Todo[], filter: Filter): Todo[] => {
  return todos.filter((todo: Todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "active") {
      return !todo.completed;
    }
    return true;
  });
};

export default TodoFilter;
