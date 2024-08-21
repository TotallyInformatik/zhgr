import axios from "axios";
import gql from "graphql-tag";
import styles from "./page.module.css";
import Link from "next/link";

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
          id: "${params.slug}"
        }
      },
    }, order: date_ASC) {
      items {
        title
        subtitle
        date
        mediaCollection {
          items {
            title
            url
          }
        }
        priorityRating
        summary {
          json
        }
      }
    }
  }`;

  const { data } = await axios.post(`${process.env.VERCEL_URL}/api/contentful`, {
    query: query,
  });

  const exerciseSessionData = data.exerciseSession;
  const weeksData = data.weekCollection;

  return <>
    <section className={styles.wrapper}>
      <aside className={styles.landingSection}>
        <article>
          <h1 className={styles.heading}>{exerciseSessionData.sessionName}</h1>
          <ul>
            <li>{exerciseSessionData.weekTime}</li>
            <li>{exerciseSessionData.location}</li>
            {
              exerciseSessionData.utilLinks.map((item: any) => {
                return <li><Link key={item.title} href={item.link}>{item.title}</Link></li>;
              })
            }
          </ul>
        </article>
      </aside>
      <section className={styles.weeks}>

      </section>
    </section>
  </>;

}






