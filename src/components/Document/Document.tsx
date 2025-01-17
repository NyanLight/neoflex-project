import styles from './Document.module.css'

export function Document () {
    return (
         <section className={styles.document}>
            <div className={styles.wrapper}>
                <div className={styles.info}>
                <h2 className={styles.document__title}>
                Payment Schedule
          </h2>
          <div className={styles.document__step}>Step 3 of 5</div>
                </div>
            </div>
         </section>
    )
}