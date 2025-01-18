import { Button } from '../Button';
import styles from './Checkbox.module.css';
import { useState } from 'react';
import { CheckboxProps } from './types/CheckboxProps.type';

export function Checkbox({
  label,
  text,
  borderRadius,
  handler,
  verticalPadding,
  gap,
  horizontalPadding,
  isRed,
}: CheckboxProps) {
  const [checked, setChecked] = useState(false);
  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.wrapper} style={{gap}}>
      <div className={styles.checkbox}>
          <input type="checkbox" checked={checked} onChange={handleCheckbox} />
          <div>  
            {label}
          </div>
      </div>
      <Button
        borderRadius={borderRadius}
        handler={handler}
        text={text}
        verticalPadding={verticalPadding}
        horizontalPadding={horizontalPadding}
        isRed={isRed}
        isDisabled={!checked}
      />
    </div>
  );
}
