import Image from "next/image";
import styles from "./page.module.css"
import { HorizontalGallery, LINE_DELAY, SlideUpAnimation } from "@/components";
import image1 from "@/public/34896B6F-45AA-4DEE-9369-CE2912182F8F_1_201_a.jpeg";
import image2 from "@/public/ilia-bronskiy-JBHy9_-Tl6E-unsplash.jpg";
import image3 from "@/public/ilia-bronskiy-ou3d9MxIUow-unsplash.jpg";
import image4 from "@/public/alexandra-b-Wau4NEcCIlo-unsplash.jpg";
import image5 from "@/public/danny-chen-qN-K7c2DYM4-unsplash.jpg"
import image6 from "@/public/jennifer-chen-lLjWZJ0UKzQ-unsplash.jpg"
import image7 from "@/public/krzysztof-kowalik-t9LedKc-yJQ-unsplash.jpg"

export default function Page() {

  return <>
    <section className={styles.wrapper}>
      <section className={styles.headingSection}>
        <Image 
          src={image2}
          alt="image1"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "50vw"
          }}
        />

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
        <Image 
          src={image4}
          alt="image1"
          style={{
            zIndex: "-1",
            position: "relative",
            marginTop: "1vw",
            height: "auto",
            width: "30vw",
            minWidth: "300px"
          }}
        />
        <Image 
          src={image5}
          alt="image1"
          style={{
            zIndex: "-2",
            position: "relative",
            marginLeft: "10%",
            marginTop: "-0px",
            height: "auto",
            width: "23vw",
            minWidth: "300px"
          }}
        />
      </section>
      <section className={styles.highlights}>
        <h2></h2>
      </section>
    </section>
  </>
}