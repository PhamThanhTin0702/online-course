import styles from "@styles/my_course.module.css"
import {TabPanel} from "@components/tab_panel"
import {myCourses} from "@data/my_course"
import iconStyles from "@styles/icon.module.css"

export const MyCourse = ({props}) => {
    const tabs = ["All Courses", "Course", "Wishlist", "Completed"]
    const tabContents = [<AllCourse/>, <AllCourse/>, <AllCourse/>, <AllCourse/>]

    return (
        <div className={styles.my_course}>
            <h3 className={styles.title}>My course</h3>
            <TabPanel tabs={tabs} tabContents={tabContents} customStyles={{justifyContent: 'center'}}/>
        </div>
    )
}

const Course = ({props}) => {
    return (
        <a className={styles.course} href={`/course/detail/${props.slug}`}>
            <img className={styles.img} src={props.image.url}/>
            <h4 className={styles.title}>{props.title}</h4>
            <div className={styles.author_wrapper}>
                <img className={iconStyles.icon_small_18} src={"/images/user.svg"}/>
                <p className={styles.author}>{props.author}</p>
            </div>
            {
                props.status == 1 ? ( <StatusNotYetStarted/> ) : props.status == 2 ? ( <StatusProcessing/> ) : ( <StatusCompleted/> )
            }
        </a>
    )
}

const StatusNotYetStarted = () => {
    return (
        <p className={styles.status}>Not Yet Started</p>
    )
}

const StatusProcessing = () => {
    return (
        <p className={styles.status}>3/8 Videos Completed</p>
    )
}

const StatusCompleted = () => {
    return (
        <p className={`${styles.status, styles.completed}`}>Completed</p>
    )
}

const AllCourse = ({props}) => {
    return (
        <div className={styles.all_course}>
            {myCourses.map((course, i) => (
                <div className={styles.item_wrapper} key={i}> 
                    <Course props={course}/>
                </div>
            ))}
        </div>
    )
}