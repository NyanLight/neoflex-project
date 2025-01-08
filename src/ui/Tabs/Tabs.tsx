import styles from './Tabs.module.css'
import React, { useState } from "react";

export function Tabs({children, tabsTitles} : {children: React.JSX.Element[], tabsTitles: string[]}) {

    const [selectedTab, setSelectedTab] = useState(0);


    const selectTab = (index: number) => {
        setSelectedTab(index);
    }

    return (
        <div className={styles.container}>
            <nav className={styles.tabs}>
                {tabsTitles.map((title, index) => (
                    <div key={index} className={selectedTab === index ? `${styles.tab} ${styles.tab__active}` : styles.tab } onClick={() => selectTab(index)}>{title}</div>
                ))}
            </nav>

            <div className={styles.contents}>
                {children.map((child, index) => (
                    <div key={index} className={selectedTab === index ? `${styles.content__active}` : styles.content}>{child}</div>
                ))}
            </div>
        </div>
    )
}