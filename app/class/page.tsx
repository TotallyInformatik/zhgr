import styles from "./page.module.css"
import { CourseCard, HorizontalGallery, ImageLink, LINE_DELAY, SlideUpAnimation } from "@/components"
import gql from "graphql-tag";
import { getContentful } from "@/lib";
import classNames from "classnames";
import misc from "@/public/misc.jpeg";

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
  const galleryElements = exerciseSessions.map((item: any) => {
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
  });
  galleryElements.unshift(
  <ImageLink 
    imgSrc={misc}
    title={"To be continued."}
    subtitle={"Maybe I'll be teaching assistant again in the future :)"}
  />
)

  
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
            In 2024 and 2025 I was a teaching assistant at my university, during which I created a lot of supplementary material.
          </p>
        </section>
        {/* <section className={styles.gallery}>
          {galleryElements}
        </section> */}


        <HorizontalGallery 
          galleryElements={galleryElements}
        />

      </div>
    </div> 
  </>
}
