import styles from './TabbedContent.module.css'
import { Tabs } from '../../ui/Tabs'
import { AboutTab } from '../tabs/AboutTab'
import { ConditionsTab } from '../tabs/ConditionsTab'
import { CashbackTab } from '../tabs/CashbackTab';
import { FAQTab } from '../tabs/FAQTab/FAQTab';

const titles = ['About card', 'Rates and conditions', 'Cashback', 'FAQ'];


export function TabbedContent() {
    return (
        <section className={styles.tabbed}>
            <Tabs tabsTitles={titles}>
                <AboutTab />
                <ConditionsTab />
                <CashbackTab />
                <FAQTab />
            </Tabs>
        </section>
    )
}