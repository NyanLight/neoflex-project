import { Label } from '../../ui/Label'
import styles from './Prescoring.module.css'

export function Prescoring () {
    return (
        <section className={styles.prescoring}>
            <Label for='text' text='test' required={true} />
        </section>
    )
}