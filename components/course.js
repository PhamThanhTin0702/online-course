import styles from "@styles/course.module.css";
import iconStyles from "@styles/icon.module.css";

import { useEffect, useRef, useState } from "react";
import {Chapter, WatchingChapter} from "@components/chapter";
import { UserWithImage } from "@components/user";
import {BuyCourse} from "@components/buy_course";
import {ButtonBuyNow} from "@components/button";
import { useDispatch, useSelector } from "react-redux";
import {actions} from "@redux/actions/course.actions";
import {actions as layoutActions} from "@redux/actions/layout.actions";

import {Rating} from "@components/rating";
import {TabPanel} from "@components/tab_panel";
import {courses} from "@data/courses";
import {reviews} from "@data/reviews";
import ReactPlayer from 'react-player/lazy'
import { useAWS } from "@lib/aws";

export const Courses = (props) => {
  return (
    <div className={styles.courses}>
      {props.children}
    </div>
  )
}

export const CourseDescription = ({props}) => {
  return (
    <div className={styles.course_wrapper}>
      <a className={styles.course_description} href={`/course/introduction/${props.slug}`}>
        <div className={styles.thumbnail_wrapper}>
          <img className={styles.thumbnail} src={props.image.url}/>
        </div>
        <h4 className={styles.title}>{props.title}</h4>
        <div className={styles.author_wrapper}>
          <img className={iconStyles.icon_small_18} src={"/images/user.svg"}/>
          <span className={styles.author}>{props.author}</span>
        </div>
        <p className={styles.short_description}>{props.short_description}</p>
        <div className={styles.rating_wrapper}>
          <Rating/>
        </div>
      </a>
    </div>
  )
}


const ContainerChapter = ({props}) => {
 
  return props.map((val, i) => (
    <Chapter 
      id={i}
      props={val} 
      key={i} 
      onClick={() => {onClickChapter(i)}}
    />
  ))
}

const ContainerDescription = ({desc}) => {
  return (
    <div className={styles.description_wrapper}>
      <p className={`${styles.des}`}>{desc}</p>
    </div>
  )
}

const ContainerAuthor = ({user}) => {
  return (
    <div className={styles.author_container}>
      <UserWithImage imgUrl={`https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg`} name={user.author}/>
    </div>
  )
}

const ContainerReviews = ({props}) => {

  return (
    <div className={styles.reviews}>
      {
        reviews.map((review, i) => (
          <div className={styles.review} key={i}>
            <img className={`${styles.reviewer_img} ${iconStyles.icon_medium}`} src={review.image.url}/>
            <div className={styles.content}>
              <p className={styles.reviewer_name}>{review.name}</p>
              <p className={styles.reviewer_cmt}>{review.comment}</p>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

export const CourseDetail = ({props}) => {
  const {courseReducer, responsiveReducer} = useSelector(state => state)
  const {GetURL} = useAWS()
  const disPatch = useDispatch()
  const videoRef = useRef();

  useEffect(() => {
    if (props) {
      disPatch({type: actions.COURSE_SET_COURSE, value: props})
      disPatch({type: actions.COURSE_SET_WATCHING_CHAPTER, value: {parentID: 0, lessonID: 0}})
    }
  }, [props])

  return (
    <div className={styles.course_detail}>
      <div className={styles.main_content}>
        <div className={styles.video_wrapper}>
        
          {/* <iframe 
            className={styles.video}
            src={`https://www.youtube.com/embed/${courseReducer.watchingLesson ? courseReducer.watchingLesson.sourceId : null}?rel=0&version=3&autoplay=1&controls=0&showinfo=0&loop=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            title="Embedded youtube"
          /> */}
          {/* <video src={GetURL('dev/demo-video/1630663025438418000.mp4', 60*5)} className={styles.video} autoPlay={true}/> */}
          <ReactPlayer url={GetURL('dev/demo-video/1630663025438418000.mp4', 60*5)} controls={true} />        
          <div className={styles.description_content}>
            {
              courseReducer.watchingChapter ? (
                <h3 className={styles.title}>{courseReducer.watchingLesson.name}</h3> 
              ) : (<h3 className={styles.title}>{props.title}</h3> )
            }
          </div>
          <div className={styles.tab_wrapper}>
            <TabPanel 
            tabs={['Course', 'About', 'Review']} 
            tabContents={[<ContainerChapter props={props.chapters}/>, <><ContainerAuthor user={{name: courseReducer.watchingChapter ? courseReducer.watchingChapter.author : props.author}}/> <ContainerDescription desc={courseReducer.watchingLesson ? courseReducer.watchingLesson.content : props.description}/></>, <ContainerReviews/> ]}
            />
          </div>
        </div>
        <div className={styles.progress}>
        <div className={styles.container_wrapper}>
        {
          courseReducer.watchingLesson && !responsiveReducer.screen.mobile ? 
          (
            <WatchingChapter props={courseReducer.watchingChapter}/>
          )  
          : (null)
        }
        </div>
        </div>
      </div>
    </div>
  )
}

export const IntroductionCourse = ({props}) => {
  const course = courses.find((course) => (course.slug === props.id))
  const {responsiveReducer} = useSelector(state => state)
  const disPatch = useDispatch()

  const handleBuyNow = () => {
    disPatch({type: layoutActions.LAYOUT_ENABLE_NAVIGATION_BOTTOM})
  }

  return (
    <div className={styles.introduction_course}>
      <div className={styles.col_left}>
          <div className={styles.course_bg}>
            <img className={styles.img} src={course.image.url}/>
            {
              responsiveReducer.screen.mobile ? (
                <div className={styles.container_btn_buy}>
                  <ButtonBuyNow onClick={handleBuyNow}/>
                </div>
              ) : null
            }
          </div>
          <h3 className={styles.title}>{course.title}</h3>
          <ContainerAuthor user={{name: course.author}}/>
          <h4 className={styles.title_section}>About Course</h4>
          <ContainerDescription desc={course.short_description}/>
          <h4 className={styles.title_section}>Review</h4>
          <ContainerReviews/>
      </div>
      {
        !responsiveReducer.screen.mobile ? (
          <div className={styles.col_right}>
            <div className={styles.container}>
              <BuyCourse/>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}