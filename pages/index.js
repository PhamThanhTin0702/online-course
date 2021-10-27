import styles from "@styles/index.module.css"
import Layout from "../components/layout"
import Header from "../components/header"
import { Slider } from "../components/slider"
import { Categories, Category } from "../components/categories"
import { Section } from "../components/section"
import { CourseDescription, Courses } from "@components/course"
import { Author } from "@components/author"
import { UserEditingProfile, UserConfig } from "@components/user"
import { Slide, Carousel } from '@components/carousel';
import { ButtonLogin, ButtonSearchBar } from '@components/button';
import { useSelector } from "react-redux"
import {author} from "@data/author"
import { courses } from "@data/courses"
import { introducingBackground } from "@data/introduce_background"
import { useAuth } from "@midleware/auth"
import 'lib/aws'

export default function Home() {
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
              customStyles={{width: "1203px"}}
            >
              <Slider images={introducingBackground}/>
              <Section>
                  <Categories>
                    <Category>
                      <span>Golang</span>
                    </Category>
                    <Category>
                      <span>Flutter</span>
                    </Category>
                    <Category>
                      <span>React Native</span>
                    </Category>
                    <Category>
                      <span>Data Scientist</span>
                    </Category>
                    <Category>
                      <span>Devops</span>
                    </Category>
                    <Category>
                      <span>NodeJS</span>
                    </Category>
                    <Category>
                      <span>ReactJS</span>
                    </Category>
                  </Categories>
                </Section>
                

                <Section>
                  <h2>Khoá học</h2>
                  <Courses>
                    {
                      courses.map((val, i) => (
                        <CourseDescription props={val} key={i}/>
                      ))
                    }
                  </Courses>
                </Section>

                <Section>
                  <h2>Tác giả</h2>
                  <Carousel>
                    {
                      author.map((val, i) => (
                        <Slide key={i}>
                          <Author props={val} key={i}/>
                        </Slide>
                      ))
                    }

                  </Carousel>
                </Section>
            </Layout.MainContent>   
            
        </Layout.BodyRow>

        <Layout.Footer></Layout.Footer>
    </Layout>
  )
}
