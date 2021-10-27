import React, { useState } from "react"

import styles from "@styles/button.module.css";
import iconStyles from "@styles/icon.module.css";

import {actions as layoutActions} from "@redux/actions/layout.actions"
import {actions as pageActions} from "@redux/actions/page.actions"

import { useDispatch, useSelector } from "react-redux";

export const ButtonWithIcon = (props) => {
    const {customStyles, iconUrl, children} = props;

    return (
        <div className={`${styles.button}`} style={customStyles}>
            <img className={styles.icon} src={iconUrl ? iconUrl : ''} alt={iconUrl}/>
            {children}
        </div>
    )
}

export const Button = (props) => {
    const {size, text, bgColor, border, children, id, onClick} = props;

    return (
        <div 
        id={id}
        className={`${styles.button} ${size} ${bgColor} ${border}`} 
        onClick={() => {onClick()}}
        >
            {children}
        </div>
    )
}

export const style = {
    size: {
        large: 'bt-large',
        medium: 'bt-medium',
        small: 'bt-small'
    },
    bgColor: {
        white_90: 'bg-white-90',
        white_60: 'bg-white-60',
        white_30: 'bg-white-30'
    },
    border: {
        border_1px_black: 'bd-1px-black-90'
    }
}

export const ButtonLogin = (props) => {
    const disPatch = useDispatch()

    const onClickLogin = () => {
        disPatch({type: pageActions.PAGE_ACTION_MODAL_LOGIN});
    }

    return (
        <div className={styles.btn_login} onClick={() => {onClickLogin()}} id="bt-login">
            Login
        </div>
    )
}

export const ButtonCart = (props) => {
    return (
        <a className={styles.btn_cart} href={"/cart"}>
            <span className={`${styles.num_cart} ${iconStyles.icon_small_18}`}>5</span>
            <img className={iconStyles.icon_small} src={"/images/shopping-cart.svg"}/>
        </a>
    )
}

export const ButtonBecomeAuthor = (props) => {

    return (
        <a className={styles.btn_become_author} href={"/course/flutter"}>
            <span>Become Instructor</span>
        </a>
    )
}

export const ButtonMenu = (props) => {
    const disPatch = useDispatch()

    const handleActivateNavigation = () => {
        disPatch({type: layoutActions.LAYOUT_ENABLE_NAVIGATION})
    }

    return (
        <div className={styles.btn_menu} onClick={() => {handleActivateNavigation()}}>
            <img className={`${styles.icon}`} src={"/images/menu.svg"}/>
        </div>
    )
}

export const ButtonClose = ({onClick}) => {
  
    return (
        <div className={styles.btn_close} onClick={() => {onClick()}}>
            <img className={`${iconStyles.icon_small_14}`} src={"/images/cancel.svg"}/>
        </div>
    )
}

export const ButtonSave = (props) => {

    return (
        <div className={styles.btn_save}>
            Save
        </div>
    )
}

export const ButtonEditProfile = (props) => {

    return (
        <a className={styles.btn_edit_profile, styles.btn} href={"/profile"}>
            <img className={`${iconStyles.icon_small}`} src={"/images/user.svg"}/>
            <span className={styles.btn_text}>Profile</span>
        </a>
    )
}

export const ButtonMyCart = (props) => {

    return (
        <a className={styles.btn} href={"/cart"}>
            <img className={`${iconStyles.icon_small}`} src={"/images/shopping-cart.svg"}/>
            <span className={styles.btn_text}>My cart</span>
        </a>
    )
}

export const ButtonMyCourse = (props) => {
    
    return (
        <a className={styles.btn} href={"/my-course"}>
            <img className={`${iconStyles.icon_small}`} src={"/images/book.svg"}/>
            <span className={styles.btn_text}>My course</span>
        </a>
    )
}

export const ButtonLogout = (props) => {
    
    return (
        <div className={styles.btn} onClick={() => {}}>
            <img className={iconStyles.icon_small} src={"/images/logout.svg"}/>
            <span className={styles.btn_text}>Logout</span>
        </div>
    )
}

export const ButtonLoupe = ({onClick}) => {
    return (
        <div className={styles.btn} onClick={() => {onClick()}}>
            <img className={`${styles.icon_small}`} src={"/images/loupe.svg"}/>
        </div>
    )
}

export const ButtonSearchBar = (props) => {
    const [text, setText] = useState('');

    const handleClearText = () => {
        setText('')
    }

    return (
        <div className={styles.search_bar} onClick={() => {}}>
            <img className={`${styles.icon_search} ${iconStyles.icon_small_18}`} src={"/images/loupe.svg"}/>
            <input 
                className={styles.input_search} 
                type={"text"}
                value={text}
                onChange={(e) => {setText(e.target.value)}}
            />
            {
                text != '' ? <ButtonClose onClick={() => {handleClearText()}}/> : null
            }
        </div>
    )
}
 
export const ButtonShowLesson = ({onClick}) => {
    return (
        <div className={styles.btn}>
            <img className={`${iconStyles.icon_small_18}`} src={"/images/right-arrow.svg"}/>
        </div>
    )
}

export const ButtonBuy = ({onClick}) => {
    return (
        <div className={`${styles.btn} ${styles.btn_buy}`}>
            Buy
        </div>
    )
}

export const ButtonBuyNow = ({onClick}) => {
    return (
        <div className={`${styles.btn} ${styles.btn_buy}`} onClick={() => {onClick ? onClick() : null}}>
            Buy Now
        </div>
    )
}

export const ButtonFollow = ({onClick}) => {
    return (
        <div className={`${styles.btn} ${styles.btn_follow}`}>
            <img className={iconStyles.icon_small_18} src={"/images/heart.svg"}/>
            <span className={styles.btn_text}>Wishlist</span>
        </div>
    )
}

export const ButtonApply = ({onClick}) => {
    return (
        <div className={`${styles.btn} ${styles.btn_apply}`}>
            Apply
        </div>
    )
}

export const ButtonCheckout = ({onClick}) => {
    return (
        <div className={`${styles.btn} ${styles.btn_checkout}`} onClick={() => {onClick ? onClick() : null}}>
            Checkout
        </div>
    )
}

export const ButtonDelete = ({onClick}) => {
    return (
        <div className={styles.btn}>
            <img className={`${iconStyles.icon_small}`} src={"/images/delete.svg"}/>
        </div>
    )
}