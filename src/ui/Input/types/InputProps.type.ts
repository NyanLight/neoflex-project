import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface InputProps<T extends FieldValues> {
    name: Path<T>;
    label?: string;
    register: UseFormRegister<T>;
    rules?: Record<string, unknown>; 
    error?: FieldError;
    placeholder?: string;
    required: boolean; 
  }