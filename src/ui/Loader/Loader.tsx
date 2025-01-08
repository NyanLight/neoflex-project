import styles from './Loader.module.css'


export function Loader ({isDisplaying}: {isDisplaying: boolean}) { 

    return (
       <div className={styles.wrapper} style={isDisplaying ? {display: 'block'} : {display: 'none'}}>
          <img className={styles.loader} src="src/assets/spinner.svg" alt="Loading..." />
       </div>
    )
}