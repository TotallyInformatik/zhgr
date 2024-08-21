'use client'

import styles from "./component.module.css"

import { useRouter } from 'next/navigation'
import Image, { StaticImageData } from "next/image"

export const CourseCard = (p: {
  id: string,
  sessionName: string,
  imgTitle: string,
  imgUrl: string,
  imgWidth: number,
  imgHeight: number,
}) => {

  const router = useRouter();

  return <>
    <section 
      className={styles.card}
      onClick={() => {
        router.push('/sessions/' + p.id, { scroll: false });
      }}
      title={p.sessionName}
      >
      {
        p.imgUrl && <Image 
          className={styles.image}
          src={p.imgUrl}
          alt={p.imgTitle}
          width={p.imgWidth}
          height={p.imgHeight}
        />
      }
    </section>
  </>
}

// ! The Idea is to have images that display the name of the exercise session.