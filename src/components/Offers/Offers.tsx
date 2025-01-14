import { Offer } from "./components/Offer"
import styles from './Offers.module.css'

export function Offers() {
    return (
        <section className={styles.offers}>
            <Offer />
            <Offer />
            <Offer />
            <Offer />
        </section>
    )
}