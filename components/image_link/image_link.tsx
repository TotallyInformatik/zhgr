'use client'

import styles from "./image_link.module.css"

import Image, { StaticImageData } from "next/image"
import { img } from "@/lib"
import { TLink } from "../tlink"
import { default as cn } from "classnames"

export const ImageLink = ({
  href,
  imgUrl,
  imgSrc,
  title,
  className,
  subtitle,
}: {
  href: string
  imgUrl?: img,
  imgSrc?: StaticImageData,
  title: string
  className?: string
  subtitle?: string
}) => {

  return <>
    <TLink 
      href={href}
      className={cn(styles.card, className)}
      title={title}
    >
      <div>
        {
          imgUrl && <Image 
            priority
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
            className={styles.image}
            src={imgSrc}
            alt={title}
          />
        }
      </div>
      {
        subtitle && <p>{subtitle}</p>
      }
    </TLink>
  </>
}