import Header from "@components/header";
import Layout from "@components/layout";
import { MyCourse } from "@components/my_course";
import { ButtonLogin, ButtonSearchBar } from "@components/button";
import { BuyCourse } from "@components/buy_course";
import styles from "@styles/index.module.css"
import { useSelector } from "react-redux"
import { UserEditingProfile, UserConfig } from "@components/user"
import { Fragment } from "react";
import { useAuth } from "@midleware/auth";
import Error from "next/error"

function MyCoursePage () {
    const {pageReducer, responsiveReducer} = useSelector(state => state)
    const {isLoggedIn} = useAuth()

    return (
        isLoggedIn ? (
            <Layout>
                <Layout.Header user={pageReducer.currUser}/>

                {
                    responsiveReducer.screen.mobile ? (
                        <Fragment>
                            <Layout.NavigationTop>
                                <div className={styles.search_wrapper}>
                                    <ButtonSearchBar/>
                                </div>
                            </Layout.NavigationTop>

                            <Layout.Navigation/>

                            <Layout.NavigationBottom>
                                <div className={styles.buy_course_wrapper}>
                                    <BuyCourse/>
                                </div>
                            </Layout.NavigationBottom>
                            </Fragment>
                    ) : null
                }

                <Layout.BodyRow>
                    <Layout.MainContent customStyles={{width: "1203px"}}>
                        <MyCourse/>
                    </Layout.MainContent>   
                </Layout.BodyRow>

                <Layout.Footer></Layout.Footer>
            </Layout>
        ) : <Error statusCode="401"/>
    )
}

export default MyCoursePage