import { Todo } from "../../../../types/types";

type Filter = "all" | "completed" | "active";

export const TodoFilter = (todos: Todo[], filter: Filter): Todo[] => {
  return todos.filter((todo: Todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "active") {
      return !todo.completed;
    }
    return true;
  });
};
