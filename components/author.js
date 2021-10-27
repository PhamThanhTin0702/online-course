import styles from "../styles/author.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';

export const Authors = ({users}) => {
    
    return (
        <div className={styles.authors}>
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            >
                {
                    users.map((usr, i) => (
                        <SwiperSlide key={i}>
                            <Author props={users} key={i}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export const Author = ({props}) => {
    const {image, name, professional} = props;
    return (
        <div className={styles.author}>
            <img className={styles.thumb} src={image.url}/>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.professional}>{professional}</p>
        </div>
    )
}