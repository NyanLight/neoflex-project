import styles from './CashbackTab.module.css'
import { CashbackCard } from './components/CashbackCard'
import { cardInfo } from './types/CashbackTab.types'


export function CashbackTab({cards}: {cards: cardInfo[]}) {
    return (
        <div className={styles.cards}>
            {cards.map((card, index) => (
                <CashbackCard key={index} color={(index % 2 === 0) ? 'rgba(234, 236, 238, 1)' : 'rgba(136, 179, 184, 0.6)'} title={card.title} description={card.description} />
            ))}
        </div>
    )
}