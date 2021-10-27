import styles from "../styles/categories.module.css"

export const Categories = (props) => {
    return (
        <div className={styles.categories}>
            {props.children}
        </div>
    )
}

export const Category = (props) => {
    return (
        <div className={styles.category}>
            {props.children}
        </div>
    )
}