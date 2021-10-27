import styles from "@styles/short_description.module.css"

import { Button, style } from "@components/button"

export const ShortDescription = ({title, description, buttonText, bgUrl}) => {
    return (
        <div className={styles.short_description}>
            <img className={styles.bg_img} src={bgUrl}/>
            <div className={styles.left_content}>
                <div className={styles.text_block}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Button 
                    size={style.size.large}
                    bgColor={style.bgColor.white_90}
                    >
                        <span className={styles.bt_registry_course}>Đăng ký ngay</span>
                    </Button>
                </div>
            </div>
            
            <div className={styles.right_content}></div>

        </div>
    )
}