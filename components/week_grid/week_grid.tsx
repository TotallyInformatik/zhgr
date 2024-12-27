'use client'
import classNames from "classnames";
import styles from "./week_grid.module.css"
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";


export const WeekGrid = (
  p: {
    weeksData: any
  }
) => {

  const [tabBoundingBox, setTabBoundingBox] = useState<any>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<any>(null);
  const [highlightedTab, setHighlightedTab] = useState<any>(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);
  const [highlightStyles, setHighlightStyles] = useState<any>({});

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

    setFill(Math.max(newFill, 0));

  }

  useEffect(() => {
    getFill();
    window.onresize = () => {
      getFill();
      updateHoverStyles();
    };
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

  const updateHoverStyles = () => {
    const newHighlightStyles: any = {};
    if (tabBoundingBox && wrapperBoundingBox) {
      newHighlightStyles.transition = isHoveredFromNull ? 
          "translate 0s linear, opacity 0.35s ease" : 
          "translate 0.35s ease, opacity 0.35s ease";
      newHighlightStyles.opacity = highlightedTab ? 1 : 0;
      newHighlightStyles.width = `${tabBoundingBox.width}px`;
      newHighlightStyles.height = `${tabBoundingBox.height}px`;

      newHighlightStyles.translate = `${
        tabBoundingBox.left - wrapperBoundingBox.left
      }px ${
        tabBoundingBox.top - wrapperBoundingBox.top
      }px`;

      setHighlightStyles(newHighlightStyles);
    }
  }

  useEffect(() => {
    const id = setInterval(async () => {
      updateHoverStyles();
    }, 100)

    return () => {
      clearInterval(id);
    }
  }, [tabBoundingBox]);

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
          const title = item.title;

          return <section 
            ref={index == 0 ? gridElementRef : null}
            key={index}
            onMouseLeave={resetHighlight}
            onMouseOver={(ev) => repositionHighlight(ev, item)}
            className={classNames(styles.card, item.title && styles.activated)}
            title={`${date} - ${title || "Coming Soon."}`} 
          >
            <section className={styles.heading}>
              <h2 className={styles.week}>{item.week}</h2>
              {title != null ? <p className={styles.title}>{title}</p> : <p className={styles.comingSoon}>Coming Soon</p>}
            </section>
            <section className={styles.itemContent}>
              {
                item.filesCollection.items.map((item: any, index: any) => {
                  return <Link className="underlineLink" key={index} href={item.url}>{item.title}</Link>
                })
              }
              {
                item.links && item.links.map((item: any, index: any) => {
                  return <Link className="underlineLink" key={index} href={item.url}>{item.title}</Link>
                })
              }
            </section>
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