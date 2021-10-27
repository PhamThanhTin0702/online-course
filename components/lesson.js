import { useDispatch, useSelector } from "react-redux";
import { actions } from "@redux/actions/course.actions";
import styles from "@styles/lesson.module.css";
import iconStyles from "@styles/icon.module.css";

export const Lesson = ({props, customStyles, onClick}) => {
    const {name, duration, type, isPublic, } = props

    return (
        <div className={styles.lesson} style={customStyles} onClick={() => {onClick()}}>
            <p className={`${styles.name} ${isPublic ? '' : styles.private}`}>{name}</p>
            <div className={`${styles.duration_wrapper} ${isPublic ? '' : styles.private}`}>
                <img className={iconStyles.icon_small_18} src={`/images/${type === "video" ? "play.svg" : "file.svg"}`}/>
                <p className={styles.duration}>{duration}</p>
            </div>
        </div>
    )
}