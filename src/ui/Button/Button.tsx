import classes from './Button.module.css';

export function Button({ text, borderRadius, horizontalPadding, verticalPadding }: { text: string; borderRadius: string; horizontalPadding: string, verticalPadding: string }) {
  const padding = `${verticalPadding} ${horizontalPadding}`
  return (
    <button className={classes.button} style={{borderRadius, padding}}>
      {text}
    </button>
  );
}
