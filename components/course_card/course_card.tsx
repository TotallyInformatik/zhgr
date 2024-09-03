'use client'

import styles from "./course_card.module.css"

import Image from "next/image"
import { img } from "@/lib"
import Link from "next/link"
import { TLink } from "../tlink"

export const CourseCard = (p: {
  id: string,
  sessionName: string,
  img: img,
}) => {

  return <>
    <TLink 
      href={'/sessions/' + p.id}
      className={styles.card}
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
    </TLink>
  </>
}

// ! The Idea is to have images that display the name of the exercise session.