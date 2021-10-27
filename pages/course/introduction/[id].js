import Header from "@components/header";
import Layout from "@components/layout";
import {IntroductionCourse} from "@components/course";
import { ButtonLogin, ButtonSearchBar } from "@components/button";
import { BuyCourse } from "@components/buy_course";
import styles from "@styles/index.module.css"
import { useSelector } from "react-redux"
import { UserEditingProfile, UserConfig } from "@components/user"
import { Fragment } from "react";
import {courseDetail} from "@data/course_detail"
import { useAuth } from "@midleware/auth";

function IntroductionCoursePage (props) {
    const {pageReducer, responsiveReducer} = useSelector(state => state)
    const {isLoggedIn} = useAuth()

    return (
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
                    <IntroductionCourse props={{id: props.id}}></IntroductionCourse>
                </Layout.MainContent>   
            </Layout.BodyRow>

            <Layout.Footer></Layout.Footer>
        </Layout>
    )
}

export default IntroductionCoursePage


export async function getServerSideProps(context) {
    const {query} = context
    return {
      props: {
        id: query.id
      }, // will be passed to the page component as props
    }
  }