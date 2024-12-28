import {FieldValues} from 'react-hook-form';
import { SelectProps } from './types/SelectProps.type';
import { Label } from '../Label';
import styles from './Select.module.css'

export const Select = <T extends FieldValues>({
  name,
  label,
  options,
  register,
  rules,
  error,
  required,
  ...selectProps
}: SelectProps<T>) => {
  return (
    <div className={styles.wrapper}>
      {label && <Label for={name} text={label} required={required} />}
      <select
        className={styles.select}
        id={name}
        {...register(name, rules)}
        {...selectProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className={styles.error}>
          {error.message}
        </span>
      )}
    </div>
  );
};

