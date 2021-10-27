import { useState } from "react";
import styles from "../styles/tab_panel.module.css";

export const TabPanel = ({tabs, tabContents, customStyles}) => {
    const [currTab, setCurrTab] = useState(0)

    const handleClickTab = (key) => {
        setCurrTab(key)
    }

    return (
        <div className={styles.tab_panel}>
            <div className={styles.tabs} style={{...customStyles}}>
                {
                    tabs.map((val, i) => (
                        <span 
                        key={i}
                        className={`${styles.tab} ${currTab === i ? styles.activate : ''}`}
                        onClick={() => {handleClickTab(i)}}>
                        {val}
                        </span>
                    ))
                }
              </div>
              <div className={styles.tab_content}>
                {
                  tabContents[currTab]
                }
            </div>
        </div>
    )
}