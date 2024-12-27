import styles from './TabbedContent.module.css'
import { Tabs } from '../../ui/Tabs'
import { AboutTab } from '../tabs/AboutTab'
import { ConditionsTab } from '../tabs/ConditionsTab'
import { CashbackTab } from '../tabs/CashbackTab';
import { FAQTab } from '../tabs/FAQTab/FAQTab';
import { conditionsData, titles } from './constants';
import { cashbackData } from '../tabs/CashbackTab/constants';



export function TabbedContent() {
    return (
        <section className={styles.tabbed}>
            <Tabs tabsTitles={titles}>
                <AboutTab />
                <ConditionsTab conditions={conditionsData} />
                <CashbackTab cards={cashbackData} />
                <FAQTab />
            </Tabs>
        </section>
    )
}