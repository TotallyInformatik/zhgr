import Image from "next/image"
import styles from "./component.module.css"
import paper from "./../../public/paper2.jpg"
import { img } from "@/lib/types"
import Link from "next/link"

export const WeekCard = (p: {
  title: string,
  date: string,
  priorityRating: {
    exercises: string,
    rating: number,
    comment: string
  }[],
  files: {
    title: string,
    url: string
  }[],
  img: img
}) => {

  const dateParts = p.date.split("T")[0].split("-");
  const date = dateParts.reverse().join(".");

  return <section className={styles.card}> 
    { 
    /*
    p.img && <Image 
        alt={p.img.title}
        src={p.img.url}
        width={p.img.width}
        height={p.img.height}
      />
      */
    }
    <article>
      <section>
        <h2>{p.title}</h2>
        <p>{date}</p>
      </section>
      {
        p.priorityRating && 
        <>
          <section className={styles.priorityRating}>
          <h3>Priority Rating</h3>
          <ul>
            {
              p.priorityRating.map((item: {exercises: string, rating: number, comment: string}, index) => {
                return <li key={index} className={styles.ratingItem}>
                  <div className={styles.rating}>
                    <p>{item.exercises}</p>
                    <div className={styles.stars}>
                      {
                        [...Array(item.rating)].map((_, i) => {
                          return <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M211,103.43l-70.13,28,49.47,63.61a8,8,0,1,1-12.63,9.82L128,141,78.32,204.91a8,8,0,0,1-12.63-9.82l49.47-63.61L45,103.43A8,8,0,0,1,51,88.57l69,27.61V40a8,8,0,0,1,16,0v76.18l69-27.61A8,8,0,1,1,211,103.43Z"></path></svg>;
                        })
                      }
                    </div>
                  </div>
                  <p className={styles.comment}>{item.comment}</p>
                </li>
              })
            }
          </ul>
          </section>
        </>
      }
      {
        p.files.length != 0 && 
        <>
          <section className={styles.files}>
          <h3>Files</h3>
            { 
                p.files.map((item, i) => {
                  return <Link key={i} href={item.url}>{item.title}</Link>
                })
            }
          </section>
        </>
      }
    </article>
  </section>;

}