import styles from "@styles/index.module.css"
import Layout from "@components/layout"
import Header from "@components/header"
import { Section } from "@components/section"
import { OrderDetail } from "@components/order_detail"
import { UserEditingProfile, UserConfig } from "@components/user"
import { ButtonLogin, ButtonSearchBar } from '@components/button';
import { useSelector } from "react-redux"
import { orders } from "@data/orders"
import { useAuth } from "@midleware/auth"

export default function PaymentPage(props) {
  const {pageReducer} = useSelector(state => state)
  const {isLoggedIn} = useAuth()
  const {id} = props
  const data = orders.find((ord) => ord.code === id)

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
              customStyles={{width: "1204px"}}
            >
                <Section>
                  <OrderDetail props={{id: id, data: data}}/>
                </Section>
            </Layout.MainContent>   
            
        </Layout.BodyRow>

        <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const {query} = context
  return {
    props: {
      id: query.id
    }, // will be passed to the page component as props
  }
}