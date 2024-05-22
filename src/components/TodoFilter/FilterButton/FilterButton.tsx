import React from "react";
import './FilterButton.css'

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({
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

export default FilterButton;
