import styles from './TabbedContent.module.css'
import { Tabs } from '../../ui/Tabs'
import { AboutTab } from '../AboutTab'
import { ConditionsTab } from '../ConditionsTab'

const titles = ['About', 'Conditions'];


export function TabbedContent() {
    return (
        <section className={styles.tabbed}>
            <Tabs tabsTitles={titles}>
                <AboutTab />
                <ConditionsTab />
            </Tabs>
        </section>
    )
}