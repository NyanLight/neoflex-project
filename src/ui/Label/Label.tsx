import styles from './Label.module.css'
import { labelProps } from "./types/labelProps.type"

export function Label (props: labelProps) {
    return (
        <label className={styles.label} htmlFor={props.for}>
        {props.text}
        {props.required ? <span className={styles.label__star}> *</span> : null}
        </label>
    )
}