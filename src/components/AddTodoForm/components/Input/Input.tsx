import "./Input.css";
import { InputProps } from "../../../../types/types";

export const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="form__input"
    />
  );
};


