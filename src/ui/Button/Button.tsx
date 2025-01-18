import styles from './Button.module.css';

export function Button({
  text,
  borderRadius,
  horizontalPadding,
  verticalPadding,
  isRed = false,
  handler,
}: {
  text: string;
  borderRadius: string;
  horizontalPadding: string;
  isRed?: boolean
  verticalPadding: string;
  handler: () => void;
}) {
  const padding = `${verticalPadding} ${horizontalPadding}`;
  return ( 
    <button
      className={isRed ? `${styles.button} ${styles.button__deny}` : styles.button}
      style={{ borderRadius, padding }}
      onClick={handler}
    >
      {text}
    </button>
  );
}
