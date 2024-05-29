import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { RootState, AppDispatch } from "../../redux/store";
import {
  toggleTodo,
  deleteTodo,
  editTodo,
  reorderTodos,
} from "../../redux/slices/todoSlice";
import { TodoItem, TodoFilter } from "./components";

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);
  const dispatch = useDispatch<AppDispatch>();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = (id: number) => {
    if (editText.trim() !== "") {
      dispatch(editTodo({ id, text: editText }));
      setEditingId(null);
      setEditText("");
    }
  };

  const filteredTodos = TodoFilter(todos, filter);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    dispatch(
      reorderTodos({
        startIndex: result.source.index,
        endIndex: result.destination.index,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            className="lists"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filteredTodos.map((todo, index) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                index={index}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                editingId={editingId}
                editText={editText}
                handleEditChange={handleEditChange}
                handleEditSubmit={handleEditSubmit}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
