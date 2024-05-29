import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slices/todoSlice";
import { RootState } from "../../redux/store";
import { FilterButton } from "./FilterButton";
import "./TodoFilter.css";

export const TodoFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.todos.filter);

  return (
    <div className="filter-container">
      <FilterButton
        active={filter === "all"}
        onClick={() => dispatch(setFilter("all"))}
      >
        Все
      </FilterButton>
      <FilterButton
        active={filter === "active"}
        onClick={() => dispatch(setFilter("active"))}
      >
        Активные
      </FilterButton>
      <FilterButton
        active={filter === "completed"}
        onClick={() => dispatch(setFilter("completed"))}
      >
        Выполненные
      </FilterButton>
    </div>
  );
};
