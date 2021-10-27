import styles from "@styles/product_detail.module.css"

export const ProductDetail = ({props}) => {
    return (
        <div className={styles.product_detail}>
            <div className={`${styles.col} ${styles.actions}`}>
                <div className={styles.content}>
                    <input className={styles.cb} type={"checkbox"}/>
                </div>
            </div>
            <div className={`${styles.col} ${styles.product}`}>
                <label className={styles.lb}>Product</label>
                <div className={styles.content}>
                    <img className={styles.img} src={props.image.url}/>
                    <p className={styles.name}>
                        {props.name}
                    </p>
                </div>
            </div>
            <div className={`${styles.col} ${styles.quantity}`}>
                <label className={styles.lb}>Quantity</label>
                <div className={styles.content}>
                    <p>
                        x {props.quantity}
                    </p>
                </div>
            </div>
            <div className={`${styles.col} ${styles.price}`}>
                <label className={styles.lb}>Price</label>
                <div className={styles.content}>
                    <p>
                        {props.price}
                    </p>
                </div>
            </div>
            <div className={`${styles.col} ${styles.subtotal}`}>
                <label className={styles.lb}>Subtotal</label>
                <div className={styles.content}>
                    <p>
                        {props.price}
                    </p>
                </div>
            </div>
        </div>
    )
}