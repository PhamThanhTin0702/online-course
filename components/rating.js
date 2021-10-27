import styles from "@styles/rating.module.css"
import iconStyles from "@styles/icon.module.css"

export const Rating = (props) => {
    return (
        <div className={styles.rating}>
            <div className={styles.stars}>
                <img className={`${iconStyles.icon_small_18} ${styles.icon}`} src={"/images/star_yellow.svg"}/>
                <img className={`${iconStyles.icon_small_18} ${styles.icon}`} src={"/images/star_yellow.svg"}/>
                <img className={`${iconStyles.icon_small_18} ${styles.icon}`} src={"/images/star_yellow.svg"}/>
                <img className={`${iconStyles.icon_small_18} ${styles.icon}`} src={"/images/star_yellow.svg"}/>
                <img className={`${iconStyles.icon_small_18} ${styles.icon}`} src={"/images/star_yellow.svg"}/>
            </div>
            <span className={styles.num_rating}>(1.2 k)</span>
        </div>
    )
}