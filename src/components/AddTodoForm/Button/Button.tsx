import React, { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button type="submit" className="form__button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
