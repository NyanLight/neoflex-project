import styles from './Loader.module.css'


export function Loader () { 

    return (
       <div className={styles.wrapper}>
          <img className={styles.loader} src="src/assets/spinner.svg" alt="Loading..." />
       </div>
    )
}