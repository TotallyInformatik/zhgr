'use client'
import styles from "./week_grid.module.css"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { HTMLAttributes, useRef, useState } from "react";


export const WeekGrid = (
  p: {
    weeksData: any
  }
) => {

  const router = useRouter();

  const [tabBoundingBox, setTabBoundingBox] = useState<any>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<any>(null);
  const [highlightedTab, setHighlightedTab] = useState<any>(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);
  const [timeout, setNewTimeout] = useState<NodeJS.Timeout | null>(null);

  const highlightRef = useRef<any>(null);
  const wrapperRef = useRef<any>(null);

  const repositionHighlight = (e: any, item: any) => {

    let target = e.target;
    if (target.id != "parent") {
      target = target.parentNode;
    }

    setTabBoundingBox(target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(item);


  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles: any = {};


  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transition = isHoveredFromNull ? 
        "transform 0s linear, opacity 0.2s ease" : 
        "transform 0.2s ease, opacity 0.2s ease";
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.height = `${tabBoundingBox.height}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px,  ${
      tabBoundingBox.top - wrapperBoundingBox.top
    }px)`;
  }


  return  <section className={styles.content}>
    <section className={styles.weeks} ref={wrapperRef}>
      <div 
        ref={highlightRef}
        className={styles.hoverEffect}
        style={highlightStyles}
      />
      {              
        p.weeksData.map((item: any, index: number) => {

          const dateParts = item.date.split("T")[0].split("-");
          const date = dateParts.reverse().join(".");
          const title = item.title || "Coming Soon";

          return <section 
            key={index}
            id="parent" 
            onMouseLeave={resetHighlight}
            onMouseOver={(ev) => repositionHighlight(ev, item)}
            className={styles.card}
            title={`${date} - ${title}`} 
            onClick={() => {
              if (item.file != null && item.file.url != null) {
                router.push(item.file.url);
              }
            }}
          >
            <h2 className={styles.week}>{item.week}</h2>
            <p className={styles.title}>{title}</p>
          </section>
        })
      }
    </section>
  </section>



}