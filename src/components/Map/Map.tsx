import classes from './Map.module.css'

export function Map() {
    return (
        <section>
            <h2>You can use our services anywhere in the world</h2>
            <div className={classes.description}>Withdraw and transfer money online through our application</div>
            <img src="src/assets/map.png" />
        </section>
    )
}