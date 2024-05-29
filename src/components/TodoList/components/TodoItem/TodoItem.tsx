import { Draggable } from "react-beautiful-dnd";
import "./TodoItem.css";
import { Props } from "../../../../types/types";

export const TodoItem: React.FC<Props> = ({
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
