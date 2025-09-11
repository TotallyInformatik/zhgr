'use client'
import Image from "next/image";
import me from "@/public/profilepic.jpg"
import code from "@/public/code.jpg"
import ethhg from "@/public/ethhg.jpg"
import starthack from "@/public/starthack.jpg"
import cn from "classnames";
import Link from "next/link";
import styles from "./horizontal_gallery.module.css"
import { useState, ReactNode, useContext, createContext } from "react";

export const GrabContext = createContext({
  clickOffset: 0
});

export const HorizontalGallery = (p : {
  galleryElements: ReactNode[]
}) => {

  const [startX, setStartX] = useState(NaN);
  const [clickOffset, setClickOffset] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(NaN);
  const [grabbing, setGrabbing] = useState(false);


  return <div className={styles.wrapper}>
    <div className={cn(styles.linksWrapper, grabbing && styles.grabbing)}
      onMouseDown={(e) => {
        e.preventDefault();
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setScrollLeft(e.currentTarget.scrollLeft);
        setGrabbing(true)
      }}
      onMouseMove={(e) => {
        if (Number.isNaN(startX)) return;
        e.preventDefault();

        const x = e.pageX - e.currentTarget.offsetLeft;
        const walk = (x - startX);
        e.currentTarget.scrollLeft = scrollLeft - walk;
      }}
      onMouseUp={(e) => {
        setClickOffset((e.pageX - e.currentTarget.offsetLeft) - startX);
        console.log((e.pageX - e.currentTarget.offsetLeft) - startX);
        setStartX(NaN);
        setGrabbing(false);
      }}
    >
      <GrabContext.Provider value={{
        clickOffset: clickOffset
      }}>
        <section className={styles.links}>
          {p.galleryElements}
        </section>
      </GrabContext.Provider>
    </div>
  </div>
  
}