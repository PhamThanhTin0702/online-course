import styles from "../styles/sidebar.module.css";

const SideBar = (props) => {
    return (
        <div className={styles.sidebar}>
            {props.children}
        </div>
    )
}

export default SideBar