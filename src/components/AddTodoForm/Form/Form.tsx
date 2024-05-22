import React, { FormEvent, ReactNode } from "react";
import './Form.css'

interface FormProps {
  onSubmit: (e: FormEvent) => void;
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
