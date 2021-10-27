import { useState } from "react"
import styles from "../styles/chapter.module.css"

import {Lesson} from "./lesson"
import {ButtonShowLesson} from "@components/button"
import { useDispatch, useSelector } from "react-redux"
import {actions as courseActions} from "@redux/actions/course.actions"
import {actions as layoutActions} from "@redux/actions/layout.actions"


export const Chapter = ({props, id}) => {
    const [showLessons, setShowLessons] = useState('');
    const disPatch = useDispatch()
    const {responsiveReducer} = useSelector(state => state)

    const onClickHeader = () => {
        setShowLessons(showLessons === 'ls-act' ? '' : 'ls-act')
    }

    const handleClickLesson = (chapterID, lessonID) => {
        disPatch({type: courseActions.COURSE_SET_WATCHING_CHAPTER, value: {lessonID: lessonID, parentID: chapterID}})

        responsiveReducer.screen.mobile && !props.lessons[lessonID].isPublic ? (
            disPatch({type: layoutActions.LAYOUT_ENABLE_NAVIGATION_BOTTOM})
        ) : null
    }

    return (
        <div className={styles.chapter}>
            <div className={styles.header} onClick={() => {onClickHeader()}}>
                <div className={styles.chapter_container}>
                    <p className={styles.name}>{props.chapter}</p>
                    <p className={styles.completed_video}><span>1</span><span>/</span><span>12</span><span> Videos</span></p>
                </div>
                <div className={`${styles.btn_ar_wrapper} ${showLessons != '' ? 'rotate-90' : ''}`}>
                    <ButtonShowLesson/>
                </div>
            </div>
            <div className={`${styles.lessons} ${showLessons}`}>
                {props.lessons.map((val, i) => (
                    <Lesson 
                    props={val}
                    key={i}
                    id={i}
                    onClick={() => {handleClickLesson(id, i)}}
                    />
                ))}
            </div>
        </div>
    )
}

export const WatchingChapter = ({props}) => {
    const disPatch = useDispatch()

    const handleClickLesson = (lessonID) => {
        disPatch({type: courseActions.COURSE_SET_WATCHING_LESSON, value: {lessonID: lessonID}})
    }

    return (
        <div className={styles.watching_chapter}>
            <div className={styles.header}>
                <p className={styles.name}>{props.chapter}</p>
                <p className={styles.total_lessons}><span>6</span><span> Lessons</span></p>
            </div>
            <div className={`${styles.lessons}`}>
                {props.lessons.map((val, i) => (
                    <Lesson 
                    props={val}
                    key={i}
                    id={i}
                    onClick={() => {handleClickLesson(i)}}
                    customStyles={{backgroundColor: "white"}}
                    />
                ))}
            </div>
        </div>
    )
}