import styles from "../styles/modal.module.css";

const Modal = (props) => {
    const {children, id} = props;

    return (
        <div className={styles.modal} id={id}>
            <div className={styles.modal_wrapped} id={`${id}-outside`}></div>
            {children}
        </div>
    )
}

export default Modal