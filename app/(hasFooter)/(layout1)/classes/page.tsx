import styles from "./page.module.css"
import { CourseCard, LINE_DELAY, SlideUpAnimation } from "@/components"
import gql from "graphql-tag";
import { getContentful } from "@/lib";

export default async function Page() {

  const data = await getContentful(gql`
    query {
      exerciseSessionCollection {
        items {
          sessionName
          sys {
            id
          }
          landingImage {
            title
            url
            width
            height
          }
          imageXPosition
          imageYPosition
        }
      }
    }
  `);

  const exerciseSessions = data.exerciseSessionCollection.items;

  return <>
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <section className={styles.introduction}>
          <h1>
            <SlideUpAnimation>
              Exercise
            </SlideUpAnimation>
            <SlideUpAnimation delayInMs={LINE_DELAY}>
              Classes
            </SlideUpAnimation>
          </h1>
          <p>
            The following page(s) contain slides and summaries of my exercise sessions.
          </p>
        </section>
        <section className={styles.sessionGrid}>
          {
            exerciseSessions.map((item: any) => {
              return <CourseCard 
                key={item.sys.id}
                id={item.sys.id}
                sessionName={item.sessionName}
                img={{
                  title: item.landingImage.title,
                  url: item.landingImage.url,
                  width: item.landingImage.width,
                  height: item.landingImage.height,
                  xPosition: item.imageXPosition,
                  yPosition: item.imageYPosition
                }}
              />
            })
          }
          <div className={styles.toBeContinued}>
            <div className={styles.svgContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,48,144ZM208,96a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,208,144Z"></path></svg>
            </div>
          </div>
        </section>
      </div>
    </div> 
  </>
}
