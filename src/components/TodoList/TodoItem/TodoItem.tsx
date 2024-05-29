import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./TodoItem.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  todo: Todo;
  index: number;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEdit: (id: number, text: string) => void;
  editingId: number | null;
  editText: string;
  handleEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditSubmit: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({
  todo,
  index,
  handleToggle,
  handleDelete,
  handleEdit,
  editingId,
  editText,
  handleEditChange,
  handleEditSubmit,
}) => {
  return (
    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
      {(provided) => (
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
              <input type="text" value={editText} onChange={handleEditChange} />
              <button onClick={() => handleEditSubmit(todo.id)}>
                Сохранить
              </button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleEdit(todo.id, todo.text)}>
                Редактировать
              </button>
            </>
          )}
          <button onClick={() => handleDelete(todo.id)}>Удалить</button>
        </li>
      )}
    </Draggable>
  );
};

export default TodoItem;
