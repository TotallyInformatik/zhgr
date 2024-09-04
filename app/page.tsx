import Image from "next/image";
import styles from "./page.module.css"
import { ImageLink, LINE_DELAY, SlideUpAnimation } from "@/components";
import ethhg from "@/public/ethhg.jpg"
import classes from "@/public/classes.jpg"
import studentvillage from "@/public/studentvillage.jpg"
import polybahn from "@/public/polybahn.jpg"

export default function Page() {

  return <>
      <section className={styles.wrapper}>
        <section className={styles.headingSection}>
          <h1 className={styles.heading}>
            <SlideUpAnimation delayInMs={LINE_DELAY * 2}>Hi, I{"'"}m Rui.</SlideUpAnimation>
            <SlideUpAnimation delayInMs={LINE_DELAY * 3}>I{"'"}m a Student and Teaching Assistant</SlideUpAnimation>
            <SlideUpAnimation delayInMs={LINE_DELAY * 4}>at the Federal Institute of Technology Zurich.</SlideUpAnimation>
          </h1>
          <h1 className={styles.mobileHeading}>
            <SlideUpAnimation delayInMs={LINE_DELAY * 2}>Hi, I{"'"}m Rui.</SlideUpAnimation>
            <SlideUpAnimation delayInMs={LINE_DELAY * 3}>I{"'"}m a Student and</SlideUpAnimation>
            <SlideUpAnimation delayInMs={LINE_DELAY * 4}>Teaching Assistant</SlideUpAnimation>
            <SlideUpAnimation delayInMs={LINE_DELAY * 5}>at the Federal Institute</SlideUpAnimation>
            <SlideUpAnimation delayInMs={LINE_DELAY * 6}>of Technology Zurich.</SlideUpAnimation>
          </h1>
        </section>
        <section className={styles.links}>
          <ImageLink
            className={styles.imageLink}
            imgSrc={classes}
            title="foto of pencils"
            href="/classes"
            subtitle="To the Exercise Classes"
          />
          <ImageLink
            className={styles.imageLink}
            imgSrc={ethhg}
            title="foto of hg, eth zurich"
            href="/about"
            subtitle="About Page"
          />
          <Image
            className={styles.img}
            src={studentvillage}
            alt="foto of student village"
          />
          <Image
            className={styles.img}
            src={polybahn}
            alt="foto of polybahn"
          />
        </section>
      </section>  
  </>

}