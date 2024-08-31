'use client'
import { useRouter } from "next/navigation";
import styles from "./week_card.module.css"
import { useRef, useState } from "react";


export const WeekCard = (p: {
  title: string,
  date: string,
  week: string, // should usually be a number
  fileUrl: string
}) => {

  const dateParts = p.date.split("T")[0].split("-");
  const date = dateParts.reverse().join(".");
  const router = useRouter();
  const title = p.title || "Coming Soon";

  const ref = useRef<HTMLDivElement>(null!);

  const determineDirection = (e: any) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerY = (rect.top + rect.bottom) / 2;
    const centerX = (rect.right + rect.left) / 2;
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (deltaX > deltaY) {
      if (absDeltaY > absDeltaX) {
        return "top"
      } else {
        return "right"
      }
    } else {
      if (absDeltaY > absDeltaX) {
        return "bottom"
      } else {
        return "left"
      }
    }
  }


  // TODO: improve
  const determineAnimationConfig = (speed: number) => {
    const animationConfig: KeyframeAnimationOptions = {
      duration: 200,
      fill: "forwards",
      easing: "cubic-bezier(.08,.33,.35,.99)"
    }
    if (speed != 0 && speed != 1) {
      animationConfig.duration = 200 * (1 / (speed / 7));
    }
    return animationConfig;
  }

  return <section 
    //onMouseMove={(e) => {
    //  setXSpeed(Math.abs(e.movementX));
    //  setYSpeed(Math.abs(e.movementY));
    //}}
    onMouseEnter={(e) => {
      switch (determineDirection(e)) {
        case "top": 
          ref.current.animate([
            { transform: "translateY(-100%) translateX(0)" },
            { transform: "translateY(0%) translateX(0)" }
          ], determineAnimationConfig(7)).commitStyles();
          break;
        case "right":
          ref.current.animate([
            { transform: "translateX(100%) translateY(0)" },
            { transform: "translateX(0%) translateY(0)" }
          ], determineAnimationConfig(7)).commitStyles();
          break;
        case "bottom":
          ref.current.animate([
            { transform: "translateY(100%) translateX(0)" },
            { transform: "translateY(0%) translateX(0)" }
          ], determineAnimationConfig(7)).commitStyles();
          break;
        case "left":
          ref.current.animate([
            { transform: "translateX(-100%) translateY(0)" },
            { transform: "translateX(0) translateY(0)" }
          ], determineAnimationConfig(7)).commitStyles();
          break;
      }
    }}
    onMouseLeave={(e) => {
      switch (determineDirection(e)) {
        case "top": 
          ref.current.animate([
            { transform: "translateY(0%) translateX(0)" },
            { transform: "translateY(-100%) translateX(0)" }
          ], determineAnimationConfig(7)).commitStyles();
          break;
        case "right":
          ref.current.animate([
            { transform: "translateX(0%) translateY(0)" },
            { transform: "translateX(100%) translateY(0)" }
          ], determineAnimationConfig(7)).commitStyles();
          break;
        case "bottom":
          ref.current.animate([
            { transform: "translateY(0%) translateX(0)" },
            { transform: "translateY(100%) translateX(0)" }
          ], determineAnimationConfig(7)).commitStyles();
          break;
        case "left":
          ref.current.animate([
            { transform: "translateX(0) translateY(0)" },
            { transform: "translateX(-100%) translateY(0)" }
          ], determineAnimationConfig(7)).commitStyles();
          break;
      }
    }}


    className={styles.card} 
    title={`${date} - ${title}`} 
    onClick={() => {
      if (p.fileUrl != null) {
        router.push(p.fileUrl);
      }
    }}
  >
    <div className={styles.hoverEffect} ref={ref} />
    <h2 className={styles.week}>{p.week}</h2>
    <p className={styles.title}>{title}</p>
  </section>

}

/// old code

/*
export const WeekCard = (p: {
  title: string,
  date: string,
  description: string,
  priorityRating: {
    exercises: string,
    rating: number,
    comment: string
  }[],
  files: {
    title: string,
    url: string,
    fileName: string
  }[],
  links: {
    title: string,
    url: string
  }[]
}) => {

  const dateParts = p.date.split("T")[0].split("-");
  const date = dateParts.reverse().join(".");

  return <section className={styles.card}> 
    <article>
      <section>
        <section className={styles.heading}>
          <h2>{p.title}</h2>
          <p className={styles.date}>{date}</p>
        </section>
        <p className={styles.description}>
          {p.description}
        </p>
      </section>
      <section className={styles.content}>
      {
        p.priorityRating && 
        <>
          <section className={styles.priorityRating}>
          <h3>Priority Rating</h3>
          <ul>
            {
              p.priorityRating.map((item: {exercises: string, rating: number, comment: string}, index) => {
                return <li key={index} className={styles.ratingItem}>
                  <div className={styles.rating}>
                    <p>{item.exercises}</p>
                    <div className={styles.stars}>
                      {
                        [...Array(item.rating)].map((_, i) => {
                          return <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M211,103.43l-70.13,28,49.47,63.61a8,8,0,1,1-12.63,9.82L128,141,78.32,204.91a8,8,0,0,1-12.63-9.82l49.47-63.61L45,103.43A8,8,0,0,1,51,88.57l69,27.61V40a8,8,0,0,1,16,0v76.18l69-27.61A8,8,0,1,1,211,103.43Z"></path></svg>;
                        })
                      }
                    </div>
                  </div>
                  <p className={styles.comment}>{item.comment}</p>
                </li>
              })
            }
          </ul>
          </section>
        </>
      }
      {
        (p.files.length != 0 || p.links.length != 0) && 
        <>
          <section className={styles.files}>
          <h3>Materials</h3>
          <ul>
            { 
              p.files.map((item, i) => {
                return <li key={i}><Link href={item.url} title={item.fileName}>{item.title}</Link></li>
              })
            }
            {
              p.links.map((item, i) => {
                return <li key={i}><Link href={item.url}>{item.title}</Link></li>
              })
            }
          </ul>
          </section>
        </>
      }
      </section>
    </article>
  </section>;

}
*/