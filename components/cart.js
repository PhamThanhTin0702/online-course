import styles from "@styles/carts.module.css"
import {ButtonDelete} from "@components/button"

export const Cart = ({props, activeLink}) => {
    return (
        <a className={styles.cart}  href={activeLink ? `/payment/${props.code}` : null}>
            <div className={styles.img_container}>
                <img className={styles.img} src={props.product.image.url}/>
            </div>
            <div className={styles.info_container}>
                <h4 className={styles.name}>{props.product.name}</h4>
                <div className={styles.author_container}>
                    <p className={styles.author}>{props.product.author}</p>
                </div>
            </div>
            <div className={styles.price_container}>
                <p className={styles.final_price}>{props.product.price}</p>
                <p className={styles.price}>{props.product.price}</p>
            </div>
            <div className={styles.action_container}>
                <div className={styles.btn_close_wrapper}>
                    <ButtonDelete/>
                </div>
            </div>
        </a>
    )
}