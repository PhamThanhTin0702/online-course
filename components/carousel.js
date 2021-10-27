import styles from "@styles/carousel.module.css"
import React, { useEffect } from "react"
import { useState } from "react"

export const Carousel = (props) => {
    const [curr, setCurr] = useState(0)
    
    const handleMove = (ind) => {
        setCurr(ind >= 0 ? ind : 0)
    }

    return (
        <div className={styles.carousel}>
            {/* <div className={styles.col}>
                <div className={`${styles.btn_previos} ${styles.btn}`} onClick={() => {handleMove(curr-1)}}>
                    <img src={"/images/left-arrow.svg"} className={styles.icon}/>
                </div>
            </div> */}

            <div className={styles.container}>
                {/* {React.Children.map(props.children, (child, index) => {
                        return React.cloneElement(child, {currIndex: curr, index: index})
                    }
                )} */}
                {
                    props.children
                }
            </div>

            {/* <div className={styles.col}>
                <div className={`${styles.btn_skip} ${styles.btn}`} onClick={() => {handleMove(curr+1)}}>
                    <img src={"/images/right-arrow.svg"} className={styles.icon}/>
                </div>
            </div> */}
        </div>
    )
}

export const Slide = (props) => {
    const {currIndex, index, children} = props

    return (
        <div className={`${styles.slide}`}>
            {children}
        </div>
    )
}