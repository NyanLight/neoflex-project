import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export interface InputProps<T extends FieldValues> {
  name: Path<T> | string;
  type: string;
  label?: string;
  register: UseFormRegister<T>;
  rules?: Record<string, unknown>;
  error?: FieldError;
  style?: React.CSSProperties;
  placeholder?: string;
  required: boolean;
}
