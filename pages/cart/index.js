import styles from "@styles/index.module.css"
import Layout from "@components/layout"
import Header from "@components/header"
import { Section } from "@components/section"
import { TableOrder, Carts } from "@components/carts"
import { UserEditingProfile, UserConfig } from "@components/user"
import { ButtonLogin, ButtonSearchBar } from '@components/button';
import { useSelector } from "react-redux"
import { useAuth } from "@midleware/auth"

export default function OrderPage() {
  const {pageReducer} = useSelector(state => state)
  const {isLoggedIn} = useAuth()

  return (
    <Layout>
        <Layout.Header user={pageReducer.currUser}/>

        <Layout.NavigationTop>
          <div className={styles.search_wrapper}>
            <ButtonSearchBar/>
          </div>
        </Layout.NavigationTop>

        <Layout.Navigation/>

        <Layout.BodyRow>
            <Layout.MainContent
              customStyles={{width: "975px"}}
            >
                <Section>
                  <h2>My carts</h2>
                  <Carts/>
                </Section>
            </Layout.MainContent>   
            
        </Layout.BodyRow>

        <Layout.Footer></Layout.Footer>
    </Layout>
  )
}
