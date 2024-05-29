import "./Form.css";
import { FormProps } from "../../../../types/types";

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};


