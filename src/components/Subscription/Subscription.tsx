import classes from './Subscription.module.css'

export function Subscription() {
    return (
        <section className={classes.subscription}>
            <div className={classes.subscription__support}>Support</div>
            <h2 className={classes.subscription__title__bold}>Subscribe Newsletter & get</h2>
            <h2 className={classes.subscription__title}>Bank News</h2>
            <div className={classes.inputField}>
                <div>
                    <img src="src/assets/email.svg" className={classes.inputField__icon}/>
                    <input type="email" placeholder='Your email' />
                </div>
                <div>
                    <button className={classes.subscription__btn} type='button'>Subscribe</button>
                </div>
            </div>
        </section>
    )
}