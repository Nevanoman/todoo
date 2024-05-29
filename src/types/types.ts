import { ReactNode, FormEvent, ChangeEvent } from "react";

interface BaseButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

export interface ButtonProps extends BaseButtonProps {}

export interface FilterButtonProps extends BaseButtonProps {
  active: boolean;
}

export interface FormProps {
  onSubmit: (e: FormEvent) => void;
  children: ReactNode;
}

export interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Props {
  todo: Todo;
  index: number;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEdit: (id: number, text: string) => void;
  editingId: number | null;
  editText: string;
  handleEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditSubmit: (id: number) => void;
}

export interface TodosState {
  todos: Todo[];
  filter: "all" | "completed" | "active";
}
