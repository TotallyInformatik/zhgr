import Image from "next/image";
import styles from "./page.module.css"
import { ImageLink, LINE_DELAY, SlideUpAnimation } from "@/components";
import me from "@/public/profilepic.jpg"
import code from "@/public/code.jpg"
import ethhg from "@/public/ethhg.jpg"
import starthack from "@/public/starthack.jpg"
import totallyinformatik from "@/public/totallyinformatik.png"
import linkedin from "@/public/linkedin.jpg"
import polybahn from "@/public/polybahn.jpg"
import cn from "classnames";
import Link from "next/link";

export default function Page() {

  const iconSize = 40;

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
        <div className={styles.linksWrapper}>
          <section className={styles.links}>
            <section className={styles.column}>
              <ImageLink
                className={cn(styles.imageLink, )}
                imgSrc={me}
                title="A foto of me a good friend of mine made"
                subtitle="I'm a bachelor compsci student in my third semester. A good friend of mine took this foto. Thank Clemens!"
              />
            </section>
            <section className={styles.column}>
              <section className={styles.shameless}>
                <div className={styles.plugs}>
                <Link href="https://website-totallyinformatik.vercel.app/" title="An old portfolio website of mine.">
                  <svg xmlns="http://www.w3.org/2000/svg"  width={iconSize} height={iconSize} fill="#000000"  viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"></path></svg>              </Link>
                <Link href="https://github.com/TotallyInformatik" title="My GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#000000" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
                </Link>
                <Link href="https://ch.linkedin.com/in/rui-zhang-978822290" title="My LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#000000" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
                </Link>
                <Link href="mailto:rui.zhang@inf.ethz.ch" title="Write me an Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                </Link>
                </div>
                <p>
                  Feel free to reach out. Since you{"'"}re probably an ETH student 
                  it{"'"}ll likely be about the exercise sessions but I{"'"}m open to anything :{")"}.
                </p>
              </section>
              <ImageLink
                className={styles.imageLink}
                imgSrc={code}
                title="Foto of some code."
                subtitle="This website was created for my exercise sessions. I used NextJS and Vercel "
              />
            </section>
            <section className={styles.column}>
              <ImageLink
                className={styles.imageLink}
                imgSrc={ethhg}
                title="Foto of HG on the inside."
                subtitle={`I${"'"}ve always enjoyed learning and creating, especially in front of the computer. That's why I chose to study computer science at ETH.`}
              />
            </section>
            <section className={styles.column}>
              <ImageLink
                className={styles.imageLink}
                imgSrc={starthack}
                title="My Participation at Start Hack 2024. We won a case!"
                subtitle="In my free time I like to go out with friends, work on other creative projects or play video games, pretending as if I haven't had enough screen time."
              />
              <ImageLink
                className={styles.imageLink}
                imgSrc={polybahn}
                title=""
                subtitle="Random Foto of the Polybahn I found. Thanks Unsplash."
              />
            </section>
          </section>
      </div>
    </section>
  </>

}