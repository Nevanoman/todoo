import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addTodo } from "../../redux/slices/todoSlice";
import { Button, Form, Input } from "./components";

export const AddTodoForm: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={text}
        onChange={handleChange}
        placeholder="Добавить заметку"
      />
      <Button>Добавить</Button>
    </Form>
  );
};

export default AddTodoForm;
