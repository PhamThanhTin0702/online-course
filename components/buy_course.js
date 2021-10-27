import styles from "@styles/buy_course.module.css"
import iconStyles from "@styles/icon.module.css"
import {ButtonBuy, ButtonFollow} from "@components/button"

export const BuyCourse = ({props}) => {
    return (
        <div className={styles.buy_course}>
            <div className={styles.price_container}>
                <span className={styles.final_price}>4.550.000</span>
                <span className={styles.original_price}>6.500.000</span>
            </div>
            <div className={styles.sale_wrapper}>
                <p className={styles.sale_percent}><span>30%</span> <span> OFF</span></p>
            </div>
            <div className={styles.btn_buy_wrapper}>
                <ButtonBuy/>
            </div>
            <div className={styles.btn_follow_wrapper}>
                <ButtonFollow/>
            </div>
            <div className={styles.info_wrapper}>
                <div className={styles.sec}>
                    <img className={iconStyles.icon_small_18} src={"/images/chapter.svg"}/>
                    <span>22 Sections</span>
                </div>
                <div className={styles.sec}>
                    <img className={iconStyles.icon_small_18} src={"/images/lesson.svg"}/>
                    <span>152 Lessons</span>
                </div>
                <div className={styles.sec}>
                    <img className={iconStyles.icon_small_18} src={"/images/live-tv.svg"}/>
                    <span>21h 33m total length</span>
                </div>
            </div>
        </div>
    )
}