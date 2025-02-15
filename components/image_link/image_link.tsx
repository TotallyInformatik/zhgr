'use client'

import styles from "./image_link.module.css"

import Image, { StaticImageData } from "next/image"
import { img } from "@/lib"
import { TLink } from "../tlink"
import { default as cn } from "classnames"
import Link from "next/link"

export const ImageLink = ({
  href,
  imgUrl,
  imgSrc,
  title,
  className,
  subtitle,
}: {
  href?: string
  imgUrl?: img,
  imgSrc?: StaticImageData,
  title: string
  className?: string
  subtitle?: string
}) => {

  const L = href == undefined ? Link : TLink;

  return <>
    <L 
      href={href || "#"}
      className={cn(styles.card, className, href && styles.hasLink)}
      title={title}
    >
      <div>
        {
          imgUrl && <Image 
            priority
            layout="responsive"
            className={styles.image}
            src={imgUrl.url}
            alt={imgUrl.title}
            width={imgUrl.width}
            height={imgUrl.height}
          />
        }
        {
          imgSrc && <Image 
            priority
            layout="responsive"
            className={styles.image}
            src={imgSrc}
            alt={title}
          />
        }
      </div>
      {
        subtitle && <p>{subtitle}</p>
      }
    </L>
  </>
}