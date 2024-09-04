'use client'
import { LINE_DELAY, SlideUpAnimation } from "@/components"
import styles from "./page.module.css"
import Image from "next/image"
import pic1 from "@/public/profilepic.jpg"
import pic2 from "@/public/awfulcode.png"
import pic3 from "@/public/starthack.jpg"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Page() {

  const iconSize = 40;

  const articleRef = useRef<any>();
  useEffect(() => {
    setInterval(function() {

    }, 5000);
  }, [])


  return <section className={styles.wrapper}> 
    <article className={styles.introduction}>
      <h1 className={styles.heading}>
        <SlideUpAnimation>
          About Me
        </SlideUpAnimation>
        <SlideUpAnimation delayInMs={LINE_DELAY}>
          and This Website
        </SlideUpAnimation>
      </h1>
      <section className={styles.shameless}>
        <Link href="https://github.com/TotallyInformatik" title="My GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#000000" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
        </Link>
        <Link href="https://ch.linkedin.com/in/rui-zhang-978822290" title="My LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#000000" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
        </Link>
        <Link href="mailto:rui.zhang@inf.ethz.ch" title="Write me an Email">
          <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
        </Link>
      </section>
    </article>
    <section className={styles.content}>
      <article className={styles.article} ref={articleRef}>
        <p>
          Hi, I{"'"}m Rui. I{"'"}m a computer science student at ETH Zurich in my third semester. 
          Welcome to this website I created for my exercise classes at ETH.
        </p>
        <p>
          I{"'"}ve always enjoyed learning and creating, especially in front of the computer, 
          which is why I{"'"}ve always wanted to study computer science. 
        </p>
        <p>
          In my free time I like to go out with friends, work on some other creative projects, or play some games 
          and pretend as if sitting around all day to study was not enough screen time already.
        </p>
        <p>
          Feel free to reach out. Since you{"'"}re probably an ETH student 
          it{"'"}ll likely be about the exercise sessions but I{"'"}m open to anything :{")"}.
        </p>
      </article>
      <section className={styles.imageGallery}>
        <Image
          className={styles.me}
          alt="picture of me"
          src={pic1}
        />
        <Image 
          className={styles.code}
          alt="horrendous code"
          src={pic2}
        />
        <Image 
          className={styles.starthack}
          alt="start hack participation 2024, where we won a case!"
          src={pic3}
        />
      </section>
    </section>
  </section>

}