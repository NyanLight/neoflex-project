import { Footer } from '../Footer'
import { Header } from '../Header'
import styles from './NotFound.module.css'

export function NotFound () {
    return (
        <>
        <Header />
        <section className={styles.notFound}>
            404 not found
        </section> 
        <Footer />
        </>
    )   
}