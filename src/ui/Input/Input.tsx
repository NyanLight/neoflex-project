import {FieldValues } from 'react-hook-form';
import { InputProps } from './types/InputProps.type';
import { Label } from '../Label';
import styles from './Input.module.css'

export const Input = <T extends FieldValues>({
  name,
  label,
  register,
  rules,
  error,
  required,
  ...inputProps
}: InputProps<T>) => {
  return (
    <div className={styles.wrapper}>
      {label && <Label for={name} required={required} text={label} />}
      <input
        id={name}
        defaultValue={undefined}
        {...register(name, rules)}
        {...inputProps}

        className={styles.input}
      />
      {error && (
        <span className={styles.error}>
          {error.message}
        </span>
      )}
    </div>
  );
};