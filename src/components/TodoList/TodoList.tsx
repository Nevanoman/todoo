import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableProvided,
  DroppableProvided,
} from "react-beautiful-dnd";
import { RootState, AppDispatch } from "../../redux/store";
import {
  toggleTodo,
  deleteTodo,
  editTodo,
  reorderTodos,
} from "../../redux/slices/todoSlice";
import "./TodoList.css";

const TodoList: React.FC = () => {
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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "active") {
      return !todo.completed;
    }
    return true;
  });

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
        {(provided: DroppableProvided) => (
          <ul
            className="lists"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filteredTodos.map((todo, index) => (
              <Draggable
                key={todo.id}
                draggableId={todo.id.toString()}
                index={index}
              >
                {(provided: DraggableProvided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggle(todo.id)}
                    />
                    {editingId === todo.id ? (
                      <>
                        <input
                          type="text"
                          value={editText}
                          onChange={handleEditChange}
                        />
                        <button onClick={() => handleEditSubmit(todo.id)}>
                          Сохранить
                        </button>
                      </>
                    ) : (
                      <>
                        <span
                          style={{
                            textDecoration: todo.completed
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {todo.text}
                        </span>
                        <button onClick={() => handleEdit(todo.id, todo.text)}>
                          Редактировать
                        </button>
                      </>
                    )}
                    <button onClick={() => handleDelete(todo.id)}>
                      Удалить
                    </button>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
