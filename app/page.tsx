import Image from "next/image";
import styles from "./page.module.css"
import { HorizontalGallery, LINE_DELAY, SlideUpAnimation } from "@/components";

export default function Page() {

  return <>
    <section className={styles.wrapper}>
      <section className={styles.headingSection}>
        <h1 className={styles.heading}>
          <SlideUpAnimation delayInMs={LINE_DELAY * 2}>Hi, I{"'"}m Rui.</SlideUpAnimation>
          <SlideUpAnimation delayInMs={LINE_DELAY * 3}>I{"'"}m a BSc. Computer Science Student</SlideUpAnimation>
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
    </section>
  </>
}