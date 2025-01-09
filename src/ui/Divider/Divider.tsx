import { DividerProps } from './types/DividerProps.type';

export function Divider(props: DividerProps) {
  return props.direction === 'horizontal' ? (
    <div
      style={{
        height: '1px',
        width: '100%',
        borderTop: `${props.borderWidth} ${props.borderStyle} ${props.borderColor} `,
      }}
    ></div>
  ) : (
    <div
      style={{
        minHeight: '100%',
        width: '1px',
        borderRight: `${props.borderWidth} ${props.borderStyle} ${props.borderColor} `,
      }}
    ></div>
  );
}
