import styles from "../styles/loading.module.css";

const Loading = (props) => {
    return (
        <div className={styles.loading}>
            <div>Loading...</div>
            {props.children}
        </div>
    )
}

export default Loading