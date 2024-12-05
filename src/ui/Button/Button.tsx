import classes from './Button.module.css';

export function Button({ text, padding }: { text: string; padding: number }) {
  return (
    <button className={classes.button} style={{ padding }}>
      {text}
    </button>
  );
}
