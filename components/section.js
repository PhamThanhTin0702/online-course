import { useEffect, useState } from "react";
import styles from "../styles/section.module.css";

export const Section = (props) => {
    return (
        <div className={`${styles.section} pd-tb-1-rem`}>
            {props.children}
        </div>
    )
}