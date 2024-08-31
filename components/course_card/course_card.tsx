'use client'

import styles from "./course_card.module.css"

import { useRouter } from 'next/navigation'
import Image from "next/image"
import { img } from "@/lib"

export const CourseCard = (p: {
  id: string,
  sessionName: string,
  img: img,
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
        p.img && <Image 
          priority
          className={styles.image}
          src={p.img.url}
          alt={p.img.title}
          width={p.img.width}
          height={p.img.height}
          style={{
            objectPosition: `${p.img.xPosition} ${p.img.yPosition}`
          }}
        />
      }
    </section>
  </>
}

// ! The Idea is to have images that display the name of the exercise session.