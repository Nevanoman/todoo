import "./Button.css";
import  {}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button type="submit" className="form__button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
