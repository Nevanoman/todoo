import "./Button.css";
import  { ButtonProps } from '../../../../types/types'

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button type="submit" className="form__button" onClick={onClick}>
      {children}
    </button>
  );
};


