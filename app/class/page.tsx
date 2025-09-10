import styles from "./page.module.css"
import { CourseCard, ImageLink, LINE_DELAY, SlideUpAnimation } from "@/components"
import gql from "graphql-tag";
import { getContentful } from "@/lib";
import classNames from "classnames";

export default async function Page() {

  const data = await getContentful(gql`
    query {
      exerciseSessionCollection(order: sys_firstPublishedAt_DESC) {
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
        <section className={classNames(styles.introduction, "rellax")}>
          <h1>
            <SlideUpAnimation>
              Exercise Classes,
            </SlideUpAnimation>
            <SlideUpAnimation delayInMs={LINE_DELAY}>
              Learning Materials
            </SlideUpAnimation>
          </h1>
          <p>
            2024 and 2025 I was a teaching assistant at ETH Zurich. Here is an archive of my materials.
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
          {
            /*

          <ImageLink 
            className={styles.more}
            imgSrc={more}
            title="More is coming in the future."
          />

          <div className={styles.toBeContinued}>
            <div className={styles.svgContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,48,144ZM208,96a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,208,144Z"></path></svg>
            </div>
          </div>
            */
          }
        </section>
      </div>
    </div> 
  </>
}
