import { ReactNode } from "react"
import styles from "./slide_up_animation.module.css"

export const LINE_DELAY = 80; // in ms

export const SlideUpAnimation = (p: {
  children: ReactNode,
  millisecondsInMs?: number
}) => {

  return <span className={styles.outerSpan}>
    <span className={styles.innerSpan} style={{
      animationDelay: `${p.millisecondsInMs || 0}ms`
    }}>
      {p.children}
    </span>
  </span>

}