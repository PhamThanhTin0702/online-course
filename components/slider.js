import { useState } from "react";
import styles from "@styles/slider.module.css";

export const Slider = ({images}) => {
    const [curr, setCurr] = useState(0)

    const handleSkip = (index) => {
        index < 0 ? setCurr(images.length-1) : setCurr(index%(images.length))
    }

    return (
        <div className={styles.slider}>
            <img src={images[curr] ? images[curr].url : null} className={styles.thumb}/>
            <div className={`${styles.bt_arrow} ${styles.left}`} onClick={() => {handleSkip(curr-1)}}>
                <img className={styles.icon} src={"/images/left-arrow.svg"}></img>
            </div>
            <div className={`${styles.bt_arrow} ${styles.right}`} onClick={() => {handleSkip(curr+1)}}>
                <img className={styles.icon} src={"/images/right-arrow.svg"}></img>
            </div>
        </div>
    )
}