'use client'
import Image from "next/image";
import me from "@/public/profilepic.jpg"
import code from "@/public/code.jpg"
import ethhg from "@/public/ethhg.jpg"
import starthack from "@/public/starthack.jpg"
import cn from "classnames";
import Link from "next/link";
import styles from "./about_gallery.module.css"
import { useState } from "react";

export const AboutGallery = () => {
  const iconSize = 40;

  const [startX, setStartX] = useState(NaN);
  const [scrollLeft, setScrollLeft] = useState(NaN);

  return <div className={styles.linksWrapper}
    onMouseDown={(e) => {
      e.preventDefault();
      setStartX(e.pageX - e.currentTarget.offsetLeft);
      setScrollLeft(e.currentTarget.scrollLeft);
    }}
    onMouseMove={(e) => {
      if (Number.isNaN(startX)) return;
      e.preventDefault();

      const x = e.pageX - e.currentTarget.offsetLeft;
      const walk = (x - startX) * 2;
      e.currentTarget.scrollLeft = scrollLeft - walk;
    }}
    onMouseUp={() => {
      setStartX(NaN);
    }}
  >
    <section className={styles.links}>
      <div className={styles.shameless}>
        <div className={styles.plugs}>
          <Link href="https://github.com/TotallyInformatik" title="My GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#000000" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
          </Link>
          <Link href="https://ch.linkedin.com/in/rui-zhang-978822290" title="My LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#000000" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
          </Link>
          <Link href="mailto:contact@zhangrui.ch" title="Write me an Email">
            <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
          </Link>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.item}>
          <Image 
            src={me}
            alt="A foto of me a good friend of mine made"
          />
          <p>
            I{"'"}m a bachelor compsci student in my third semester.
            A good friend of mine took this foto. Thanks Clemens!
          </p>
          
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.item}>
          <Image 
            src={code}
            alt="A foto of some code."
          />
          <p>This website was created for my exercise sessions. I used NextJS and Vercel </p>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.item}>
          <Image 
            src={ethhg}
            alt="A foto of ETH HG from the inside from unsplash"
          />
          <p>I{"'"}ve always enjoyed learning and creating, especially in front of the computer. That{"'"}s why I chose to study computer science at ETH.</p>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.item}>
          <Image 
            src={starthack}
            alt="A foto of my friend Pascal and I at Start Hack 2024. We won a case!"
          />
          <p>In my free time I like to go out with friends, work on other creative projects or play video games, pretending as if I haven{"'"}t had enough screen time.</p>
        </div>
      </div>
      
    </section>
  </div>
}