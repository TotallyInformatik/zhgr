import gql from "graphql-tag";
import styles from "./page.module.css";
import Link from "next/link";
import { getContentful } from "@/lib";
import { LINE_DELAY, SlideUpAnimation, WeekCard } from "@/components";

export default async function Page({ params }: { params: { slug: string } }) {
  //return <div>My Post: {params.slug}</div>

  const query = gql`query {
    exerciseSession(id: "${params.slug}") {
      sessionName
      landingImage {
        title
        url
        width
        height
      }
      weekTime
      location
      utilLinks
    }
    weekCollection(where: {
      session: {
        sys: {
          id:"${params.slug}"
        }
      }
    }, order: date_ASC) {
      items {
        title
        date
        week
        file {
          url
        }
      }
    }
  }`;

  const data = await getContentful(query);

  const exerciseSessionData = data.exerciseSession;
  const weeksData = data.weekCollection.items;
  const sessionName: string[] = exerciseSessionData.sessionName.split("\\")

  return <>
    <section className={styles.wrapper}>
      <section className={styles.landingSection}>
        <h1 className={styles.heading}>
          {
            sessionName.map((item: string, index) => {
              return <SlideUpAnimation millisecondsInMs={index*LINE_DELAY} key={index}>
                {item}
              </SlideUpAnimation>
            })
          }
        </h1>
        <article className={styles.information}>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg>
              <p>{exerciseSessionData.weekTime}</p>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path></svg>
              <p>
                {exerciseSessionData.location}
              </p>
            </li>
            {
              exerciseSessionData.utilLinks.map((item: any) => {
                return <Link href={item.link} key={item.title}><li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z"></path></svg>
                    <p>{item.title}</p>
                  </li></Link>
              })
            }
          </ul>
        </article>
      </section>
      <section className={styles.content}>
          <section className={styles.weeks}>
            {
              weeksData.map((item: any, index: number) => {
                return <WeekCard 
                  key={index}
                  title={item.title}
                  date={item.date}
                  week={item.week}
                  fileUrl={item.file && item.file.url}
                />
              })
            }
          </section>
        </section>
    </section>
  </>;

}






