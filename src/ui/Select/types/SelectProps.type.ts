  import {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
  } from 'react-hook-form';

  export interface SelectProps<T extends FieldValues> {
    name: Path<T>;
    label?: string;
    options: { value: string; label: string }[];
    register: UseFormRegister<T>;
    rules?: Record<string, unknown>;
    error?: FieldError;
    required: boolean;
    [x: string]: unknown;
  }
