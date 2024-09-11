'use client'
import styles from "./week_grid.module.css"
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


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

  // number of elements to fill in grid to make it look good.
  const [fill, setFill] = useState<number>(0);

  const highlightRef = useRef<any>(null);
  const wrapperRef = useRef<any>(null);
  const gridElementRef = useRef<any>(null);
  const fillWrapperRef = useRef<any>(null);


  const getFill = () => {
    // round up grid size
    // round down element size
    setFill(0);
    
    const wrapperBoundingRect = wrapperRef.current.getBoundingClientRect();
    const gridElementBoundingRect = gridElementRef.current.getBoundingClientRect();

    const rows = Math.round(Math.ceil(wrapperBoundingRect.height) / Math.floor(gridElementBoundingRect.height));
    const columns = Math.round(Math.ceil(wrapperBoundingRect.width) / Math.floor(gridElementBoundingRect.width));

    const newFill = rows * columns - p.weeksData.length

    fillWrapperRef.current.style.height = `${gridElementBoundingRect.height}px`;
    fillWrapperRef.current.style.width = `${gridElementBoundingRect.width * newFill}px`;

    setFill(newFill);

  }

  useEffect(() => {
    getFill();
    window.onresize = getFill;
  }, [])


  const repositionHighlight = (e: any, item: any) => {

    let target = e.currentTarget;

    const targetBoundingRect = target.getBoundingClientRect();
    setTabBoundingBox(targetBoundingRect);
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(item);

  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles: any = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transition = isHoveredFromNull ? 
        "transform 0s linear, opacity 0.35s ease" : 
        "transform 0.35s ease, opacity 0.35s ease";
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.height = `${tabBoundingBox.height}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px, ${
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
            ref={index == 0 ? gridElementRef : null}
            key={index}
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
      <section className={styles.fillWrapper} ref={fillWrapperRef}>
        {
          [...new Array(fill)].map((_, index) => {
            return <div key={index} className={styles.fill}/>
          })
        }
      </section>
    </section>
  </section>



}