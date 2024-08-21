'use client'

import styles from "./component.module.css"

import { useRouter } from 'next/navigation'
import Image, { StaticImageData } from "next/image"

export const CourseCard = (p: {
  title: string,
  link: string,
  img: StaticImageData | null
}) => {

  const router = useRouter();

  return <>
    <section 
      className={styles.card}
      onClick={() => {
        router.push('/' + p.link, { scroll: false });
      }}
      title={p.title}
      >
      {
        p.img && <Image 
          className={styles.image}
          src={p.img}
          alt={p.title}
        />
      }
    </section>
  </>
}

// ! The Idea is to have images that display the name of the exercise session.