import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/layout.module.css";

import {actions} from "../redux/actions/page.actions";
import {actions as layoutActions} from "@redux/actions/layout.actions";

import {actions as responsiveActions} from "../redux/actions/responsive.actions";

import Loading from "@components/loading";
import LoginForm from "@components/login";
import Modal from "@components/modal";
import SEO from "@components/seo"
import Header from "@components/header"
import {ButtonClose, ButtonLogin} from "@components/button"
import {useFirebase} from "../lib/firebase"
import { Fragment } from "react";
import { UserConfig, UserWithAvatar } from "./user";

const Layout = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const {pageReducer} = useSelector(state => state);
    const {modal} = pageReducer;
    const disPatch = useDispatch();
    const {onAuthChange} = useFirebase()

    const cbResize = useCallback(() => {
        if (screen.width <= 375) {
            disPatch({type: responsiveActions.RESPONSIVE_SET_MOBILE_SCREEN})
        } else if (screen.width >= 768 && screen.width <= 1024) {
            disPatch({type: responsiveActions.RESPONSIVE_SET_TABLET_SCREEN})
        } else if (screen.width > 1024) {
            disPatch({type: responsiveActions.RESPONSIVE_SET_DESKTOP_SCREEN})
        }

    }, [])

    const cbClick = useCallback((e) => {
        const modalElem = document.getElementById("modal-login-outside");
        const btLoginElem = document.getElementById("bt-login");
        if (modalElem) {
            if (modalElem.contains(e.target) && btLoginElem && !btLoginElem.contains(e.target)) {
                disPatch({type: actions.PAGE_HIDE_MODAL_LOGIN})
            }
        }
    }, [])

    useEffect(() => {
        if (window != undefined) {
            cbResize()

            window.addEventListener('resize', cbResize)

            window.addEventListener("click", cbClick)

            return function cleanup () {
                window.removeEventListener("click", cbClick);
                window.removeEventListener('resize', cbResize);
            }
        }
    }, [])

    const handleAuthChange = (state) => {
        disPatch({type: actions.PAGE_SET_CURR_USER, value: {email: state.email, photo: state.photoURL}})
    }

    useEffect(() => {
        onAuthChange(handleAuthChange)

        setIsLoading(false);
    }, [])

    return (
        <div className={styles.layout}>
            {
                isLoading ? (
                    <Loading></Loading>
                ) : props.children
            }

            {
                modal ? (
                    <Modal id={"modal-login"}>
                        <LoginForm></LoginForm>
                    </Modal>
                ) : null
            }
        </div>
    )
}

Layout.Header = (props) => {
    const {user} = props

    return (
        <div className={styles.header}>
            <SEO/>
            <Header user={user}/>
            {props.children}
        </div>
    )
}

Layout.MainContent = (props) => {
    const {customStyles} = props;

    return (
        <div className={`${styles.main_content}`} style={customStyles}>
            {props.children}
        </div>
    )
}

Layout.BodyRow = (props) => {

    const {customStyles} = props;

    return (
        <div className={styles.body_row} style={customStyles}>
            {props.children}
        </div>
    )
}

Layout.Navigation = (props) => {
    const {layoutReducer, pageReducer} = useSelector(state => state);
    const disPatch = useDispatch()

    const handleCloseNavigation = () => {
        disPatch({type: layoutActions.LAYOUT_DISABLE_NAVIGATION})
    }

    return (
        <div className={`${styles.navigation} ${layoutReducer.navigation.active ? styles.ngt_active : ''}`}>
            <div className={styles.btn_close_wrapper}>
                <ButtonClose onClick={handleCloseNavigation}/>
            </div>
            {
                pageReducer.currUser ? (
                    <Fragment>
                        <div className={styles.usr_inf_wrapper}>
                            <UserWithAvatar name={pageReducer.currUser.email} imgUrl={pageReducer.currUser.photoURL}/>
                        </div>
                        <div className={styles.usr_cf_wrapper}>
                            <UserConfig/>
                        </div>
                    </Fragment>
                ) : (
                    <ButtonLogin/>
                )
            }
            {props.children}
        </div>
    )
}

Layout.NavigationTop = (props) => {
    const {layoutReducer} = useSelector(state => state);
    
    return (
        <div className={`${styles.navigation_top} ${layoutReducer.top_navigation.active ? styles.ngt_top_active : ''}`}>
            {props.children}
        </div>
    )
}

Layout.NavigationBottom = (props) => {
    const {layoutReducer} = useSelector(state => state);
    const disPatch = useDispatch()
    
    const cbClick = useCallback((e) => {
        const ngtBottom = document.getElementById("ngt-bt");
        if (ngtBottom) {
            if (ngtBottom.contains(e.target)) {
                disPatch({type: layoutActions.LAYOUT_DISABLE_NAVIGATION_BOTTOM})
            }
        }
    }, [])

    useEffect(() => {
        if (window != undefined) {
            window.addEventListener("click", cbClick)

            return function cleanup () {
                window.removeEventListener("click", cbClick);
            }
        }
    }, [])

    return (
        <div id={'ngt-bt'} className={`${styles.navigation_bottom} ${layoutReducer.bottom_navigation.active ? styles.ngt_bt_active : ''}`}>
            <div className={`${styles.container} ${layoutReducer.bottom_navigation.active ? styles.ngt_bt_ctn_active : ''}`}>
                {props.children}
            </div>
        </div>
    )
}

Layout.Footer = (props) => {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>©200Labeducation. All Rights Reserved.</div>
            {props.children}
        </div>
    )
}

Layout.SideBar = (props) => {
    const [activateSidebar, setActivateSidebar] = useState(false);

    const onClickTriangle = () => {
        let prevState = activateSidebar
        setActivateSidebar(!prevState);
    }

    return (
        <div className={`${styles.sidebar_wrapped} ${activateSidebar ? `open` : ``}`}>
            <div className={styles.triangle} onClick={onClickTriangle}>{`>`}</div>
            <div className={`${styles.sidebar}`}>
                {props.children}
            </div>
        </div>
    )
}
export default Layout