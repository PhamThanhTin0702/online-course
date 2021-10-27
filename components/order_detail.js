import styles from "@styles/order_detail.module.css"
import {ButtonApply, ButtonCheckout} from "@components/button"
import {Cart} from "@components/cart"

export const OrderDetail = ({props}) => {
    const {id, data} = props
    return (
        <div className={styles.order_detail}>
            <h3>{`Cart #${id}`}</h3>
            <div className={styles.bill_container}>
                <div className={styles.order_container}>
                    <div className={styles.content_order}>
                        <div className={styles.info_order}>
                            <h4 className={styles.title}>Overview</h4>
                            <div className={styles.created_date}>{data.createdDate}</div>
                        </div>
                        <div className={styles.table_order}>
                            <Cart props={data}/>
                        </div>
                    </div>
                </div>
                <div className={styles.order_summary}>
                    <h4 className={styles.header}>
                        Cart total
                    </h4>
                    <div className={styles.info_summary}>
                        <div className={styles.row}>
                            <label className={styles.lb}>Subtotal</label>
                            <p>{data.price}</p>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.lb}>Sale Off</label>
                            <p>30%</p>
                        </div>
                        <div className={styles.gift_container}>
                            <label className={styles.lb}>Gift card/Discount code</label>
                            <div className={styles.input_wrapper}>
                                <input className={styles.input_gift}/>
                                <ButtonApply/>
                            </div>
                        </div>
                        <div className={styles.payment_container}>
                            <label className={styles.lb}>Payment method</label>
                            <div className={styles.payment_wrapper}>
                                <ul className={styles.payments}>
                                    <li className={styles.payment}> 
                                        <input className={styles.cb} type={"checkbox"}/>
                                        <img className={styles.img_payment} src={"/images/momo.png"}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <label className={styles.lb_total}>Total</label>
                            <p className={styles.total_price}>{data.price}</p>
                        </div>
                        <div className={styles.btn_ck_wrapper}>
                            <ButtonCheckout/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}