import classes from './Button.module.css';

export function Button({ text, borderRadius, horizontalPadding, verticalPadding, handler }: { text: string; borderRadius: string; horizontalPadding: string, verticalPadding: string, handler: () => void }) {
  const padding = `${verticalPadding} ${horizontalPadding}`
  return (
    <button className={classes.button} style={{borderRadius, padding}} onClick={handler}>
      {text}
    </button>
  );
}
