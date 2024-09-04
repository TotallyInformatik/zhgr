'use client'

import styles from "./course_card.module.css"

import Image from "next/image"
import { img } from "@/lib"
import { TLink } from "../tlink"
import { ImageLink } from "@/components"

export const CourseCard = (p: {
  id: string,
  sessionName: string,
  img: img,
}) => {

  return <>
    <ImageLink
      href={'/classes/' + p.id}
      className={styles.card}
      imgUrl={p.img}
      title={p.sessionName.replaceAll("\\", " ")}
    />
  </>
}


/*
    <TLink 
      href={'/classes/' + p.id}
      className={styles.card}
      title={p.sessionName.replaceAll("\\", " ")}
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
    </TLink>
*/
// ! The Idea is to have images that display the name of the exercise session.