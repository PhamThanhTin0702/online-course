import Layout from "@components/layout";
import {ButtonLogin, ButtonEditProfile, ButtonSearchBar } from "@components/button";
import styles from "@styles/index.module.css"
import { useSelector } from "react-redux"
import { UserConfig, UserProfile, UserEditingProfile } from "@components/user"
import { useAuth } from "@midleware/auth";
import { Fragment } from "react";
import Error from "next/error"

const ProfilePage = (props) => {
    const {pageReducer} = useSelector(state => state)
    const {isLoggedIn} = useAuth()

    return (
        isLoggedIn ? (
            <Layout>
                <Layout.Header user={pageReducer.currUser}/>

                <Layout.NavigationTop>
                    <div className={styles.search_wrapper}>
                        <ButtonSearchBar/>
                    </div>
                </Layout.NavigationTop>

                <Layout.Navigation/>
                
                <Layout.BodyRow>
                    <Layout.MainContent customStyles={{width: "975px"}}>
                        <UserProfile/>
                    </Layout.MainContent>   
                </Layout.BodyRow>

                <Layout.Footer></Layout.Footer>
            </Layout>
        ) : <Error statusCode="401"/>
    )
}

export default ProfilePage