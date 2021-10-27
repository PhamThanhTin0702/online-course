import styles from "@styles/carts.module.css"
import {orders} from "@data/orders"
import {Cart} from "@components/cart"

const WaitingStatus = (props) => {
    return (
        <div className={styles.box_waiting}>Đang xử lý</div>
    )
}

const SuccessStatus = (props) => {
    return (
        <div className={styles.box_success}>Đã xử lý</div>
    )
}

const ErrorStatus = (props) => {
    return (
        <div className={styles.box_error}>Thất bại</div>
    )
}

export const Carts = (props) => {
    return (
        <div className={styles.carts}>
            
            {
                orders.map((val, i) => (
                    <div className={styles.cart_container} key={i}> 
                        <Cart props={val} activeLink={true} key={i}/>
                    </div>
                ))
            }
        </div>
    )
}