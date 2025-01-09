import { Button } from '../../ui/Button'
import { Footer } from '../Footer'
import { Header } from '../Header'
import styles from './NotFound.module.css'
import { useNavigate } from 'react-router'

export function NotFound () {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);        
    }

    return (
        <>
        <Header />
        <section className={styles.notFound}>
            <div className={styles.infoPart}>
                <h2 className={styles.infoPart__oops}>Oops....</h2>
                <h2 className={styles.infoPart__h2}>Page not found</h2>
                <div className={styles.infoPart__regular}>This Page doesn't exist or was removed! We suggest you go back.</div>
                <Button borderRadius='8px' horizontalPadding='4rem' verticalPadding='0.75rem' text='Go back' handler={goBack} />
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