import { useEffect, useState, useCallback } from "react";
import styles from "@styles/user.module.css";
import iconStyles from "@styles/icon.module.css";
import { useFirebase } from "@lib/firebase";
import { ButtonBecomeAuthor, ButtonSave, ButtonLogout, ButtonMyCart, ButtonMyCourse, ButtonEditProfile } from "@components/button";
import { TabPanel } from "@components/tab_panel";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { useAuth } from "@midleware/auth";

export const Avatar = (props) => {
    const {email, photoURL} = props.user;
    const [activatePopup, setActivatePopup] = useState(false);

    const cbClick = useCallback((e) => {
        const popupElem = document.getElementById("popup-config");
        const userElem = document.getElementById("user");
        if (popupElem) {
            if (!popupElem.contains(e.target) && userElem && !userElem.contains(e.target)) {
                setActivatePopup(false)
            }
        }
    }, [activatePopup])

    const onClickUser = () => {
        setActivatePopup(true);
    }

    useEffect(() => {
        window.addEventListener("click", cbClick)

        return function cleanup () {
            window.removeEventListener("click", cbClick);
        }
    })

    return (
        <div className={styles.user_wrapped}>
            <div className={styles.user} id="user" onClick={() => {onClickUser()}}>
                <img className={styles.avatar} src={photoURL ? photoURL : null}/>
                {
                    activatePopup ? (
                        <div className={`${styles.popup}`} id="popup-config">
                            <div className={styles.content}>
                                <div className={styles.header}>
                                    <div className={styles.user_profile}>
                                        <p className={styles.name}>{email}</p>
                                    </div>
                                </div>
                                <UserConfig/>
                            </div>
                        </div>
                    ) : null
                }   
            </div>
        </div>
    )
}

export const UserWithImage = ({name, imgUrl}) => {

    return (
        <div className={styles.user_row}>
            <img src={imgUrl ? imgUrl : null} className={styles.user_img}/>
            <div className={styles.info_user}>
                <span className={styles.name}>{name ? name : null}</span>
                <span className={styles.prof}>Developer Flutter</span>
            </div>
        </div>
    )
}

export const ColumnUserWithImage = ({name, imgUrl}) => {

    return (
        <div className={styles.user_column}>
            <img src={imgUrl ? imgUrl : null} className={styles.user_img}/>
            <span className={styles.name}>{name ? name : null}</span>
        </div>
    )
}

export const UserConfig = (props) => {
    const {signOut} = useAuth();
    const {pageReducer} = useSelector(state => state)

    const onLogout = () => {
        signOut()
        window.location = window.location.pathname;
    }

    return (
        <ul className={styles.menu}>
            <li className={styles.item}>
                <ButtonBecomeAuthor/>
            </li>
            <li className={styles.item}>
                <ButtonEditProfile/>
            </li>
            <li className={styles.item}>
                <ButtonMyCart/>
            </li>
            <li className={styles.item}>
                <ButtonMyCourse/>
            </li>
            <li className={styles.item} onClick={() => {onLogout()}}>
                <ButtonLogout/>
            </li>
        </ul>
    )
}

export const UserProfile = (props) => {
    const tabs = ['Profile', 'Personalisation', 'Account', 'Payment Methods', 'Notifications', 'Privacy']
    const tabContents = [<Profile/>, <Profile/>, <Profile/>, <Profile/>, <Profile/>, <Profile/>]

    return (
        <div className={styles.user_profile}>
            <h3 className={styles.title}>My Profile</h3>
            <TabPanel tabs={tabs} tabContents={tabContents} customStyles={{justifyContent: 'center'}}/>
        </div>
    )
}

export const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <div className={styles.avatar_wrapper}>
                <img className={styles.icon_avatar} src={"https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg"}/>
            </div>
            <div className={styles.field}>
                <label>First Name</label>
                <input type="text"/>
            </div>
            <div className={styles.field}>
                <label>Last Name</label>
                <input type="text"/>
            </div>
            <div className={styles.field}>
                <label>Email</label>
                <input type="text"/>
            </div>
            <div className={styles.field}>
                <label>Phone</label>
                <input type="text"/>
            </div>
            <div className={styles.btn_save_wrapper}>
                <ButtonSave/>
            </div>
        </div>
    )
}

export const UserWithAvatar = ({name, imgUrl}) => {
    return (
        <div className={styles.user_avatar}>
            <div className={styles.col_left}>
                <img className={`${iconStyles.icon_medium} ${styles.bdr_icon}`} src={imgUrl}/>
            </div>
            <div className={styles.col_right}>
                <p className={styles.name}>{name ? name : null}</p>
                <p className={styles.prof}>Developer Flutter</p>
            </div>
        </div>
    )
}