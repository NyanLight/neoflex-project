import styles from './Button.module.css';
import { ButtonProps } from './types/ButtonProps.type';

export function Button({
  text,
  borderRadius,
  horizontalPadding,
  verticalPadding,
  isRed = false,
  isDisabled = false,
  handler,
}: ButtonProps) {
  const padding = `${verticalPadding} ${horizontalPadding}`;
  return (
    <button
      disabled={isDisabled}
      className={
        isRed ? `${styles.button} ${styles.button__deny}` : styles.button
      }
      style={{ borderRadius, padding }}
      onClick={handler}
    >
      {text}
    </button>
  );
}
