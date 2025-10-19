'use client'
import Image from "next/image";
import styles from "./page.module.css"
import { Cursor, HorizontalGallery, LINE_DELAY, SlideUpAnimation } from "@/components";
import image2 from "@/public/ilia-bronskiy-JBHy9_-Tl6E-unsplash.jpg";
import image3 from "@/public/ilia-bronskiy-ou3d9MxIUow-unsplash.jpg";
import image4 from "@/public/alexandra-b-Wau4NEcCIlo-unsplash.jpg";
import image5 from "@/public/danny-chen-qN-K7c2DYM4-unsplash.jpg"
import image6 from "@/public/mika-baumeister-L4rJd9JhO_w-unsplash.jpg"
import image7 from "@/public/AF366569-EDDE-4790-9CF2-6BCC4CAD15B4_1_201_a.jpeg"
import { useEffect } from "react";
import SmoothScroll from "@/components/scroll/scroll";

export default function Page() {

  return <>
    <section className={styles.wrapper}>
      <section className={styles.headingSection}>
        <h1 className={styles.heading}>
          <div className={styles.firstLine}>
            <SlideUpAnimation delayInMs={LINE_DELAY * 2}>
              Hi, I{"'"}m Rui. 
            </SlideUpAnimation>
            <span className={styles.likes}>
                <span>I like programming.</span>
                <span>I have an incredible minecraft base.</span>
                <span>I like running.</span>
                <span>I love to build.</span>
                <span>I like programming.</span>
            </span>
          </div>
          <SlideUpAnimation delayInMs={LINE_DELAY * 3}><span className={styles.unimportantHeading}>I{"'"}m a</span> BSc. Computer Science Student</SlideUpAnimation>
          <SlideUpAnimation delayInMs={LINE_DELAY * 4}><span className={styles.unimportantHeading}>at the</span> Federal Institute of Technology Zurich.</SlideUpAnimation>
        </h1>
        <h1 className={styles.mobileHeading}>
          <SlideUpAnimation delayInMs={LINE_DELAY * 2}>Hi, I{"'"}m Rui,</SlideUpAnimation>
          <SlideUpAnimation delayInMs={LINE_DELAY * 3}>BSc. CompSci Student</SlideUpAnimation>
          <SlideUpAnimation delayInMs={LINE_DELAY * 4}>at the Federal Institute</SlideUpAnimation>
          <SlideUpAnimation delayInMs={LINE_DELAY * 5}>of Technology Zurich.</SlideUpAnimation>
          <div className={styles.firstLineMobile}>
            <span className={styles.likes}>
                <span>I like coding.</span>
                <span>My mc Base is huge.</span>
                <span>I like to run.</span>
                <span>I love to build.</span>
                <span>I like coding.</span>
            </span>
          </div>
        </h1>
      </section>
      <section className={styles.imageSection}>
        <div>
          <Image 
            src={image7}
            alt="image1"
            width={image7.width}
            height={image7.height}
          />
          <Image 
            src={image6}
            alt="image1"
            width={image6.width}
            height={image6.height}
          />
        </div>
        <Image 
          src={image2}
          alt="image1"
          width={image2.width}
          height={image2.height}
        />
      </section>
    </section>
  </>
}