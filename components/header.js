import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/header.module.css";


import {Avatar} from "./user";
import {ButtonLogin, ButtonMenu, ButtonBecomeAuthor, ButtonCart, ButtonSearchBar, ButtonLoupe} from "@components/button";

import {actions as layoutActions} from "@redux/actions/layout.actions"

function Header (props) {
    const {pageReducer, responsiveReducer, layoutReducer} = useSelector(state => state)
    const {screen} = responsiveReducer
    const {top_navigation} = layoutReducer
    const disPatch = useDispatch()

    const handleCloseNavigation = () => {
      top_navigation.active ? (
        disPatch({type: layoutActions.LAYOUT_DISABLE_NAVIGATION_TOP})
      ) : (
        disPatch({type: layoutActions.LAYOUT_ENABLE_NAVIGATION_TOP})
      )
    }


  return (
    <div className={styles.header_wrapped}>
      <div className={styles.header}>
        <div className={styles.col_left}>
          <div className={styles.menu_wrapper}>
            <ButtonMenu/>
          </div>
          <div className={styles.logo_wrapped}>
            <a href="/">
              <img src="/images/200lab-logo.svg" className={styles.logo} />
            </a>
          </div>
        </div>
        {
          !screen.mobile ? (
            <div className={styles.col_mid}>
              <div className={styles.search_bar_wrapper}>
                <ButtonSearchBar/>
              </div>
            </div>
          ) : null
        }
        <div className={styles.col_right}>
          <div className={styles.bc_author_wrapper}>
            <ButtonBecomeAuthor/>
          </div>
          <div className={styles.cart_loupe_wrapper}>
            {
              !screen.mobile ? <ButtonCart/> : <ButtonLoupe onClick={handleCloseNavigation}/>
            }
          </div>
          {
            pageReducer.currUser ? (
              <div className={styles.user_wrapper}>
                <Avatar user={pageReducer.currUser}/>
              </div>
            ) : (
              <div className={styles.btn_lg_wrapper}>
                <ButtonLogin/>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
