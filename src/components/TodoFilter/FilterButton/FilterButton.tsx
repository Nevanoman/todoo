import "./FilterButton.css";
import { FilterButtonProps } from '../../../types/types'

export const FilterButton: React.FC<FilterButtonProps> = ({
  active,
  onClick,
  children,
}) => {
  return (
    <button
      className={`filter-button ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
