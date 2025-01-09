import { Footer } from '../Footer'
import { Header } from '../Header'
import styles from './NotFound.module.css'

export function NotFound () {
    return (
        <>
        <Header />
        <section className={styles.notFound}>
            <div className={styles.infoPart}>

            </div>
            <div className={styles.imagePart}>
                <div className={styles.imagePart__wrapper}>
                <img className={styles.imagePart__img} src="src/assets/404.png" alt="" />
                </div>
            </div>
        </section> 
        <Footer />
        </>
    )   
}