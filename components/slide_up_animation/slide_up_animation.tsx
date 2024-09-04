import { ReactNode } from "react"
import styles from "./slide_up_animation.module.css"

export const LINE_DELAY = 100; // in ms

export const SlideUpAnimation = (p: {
  children: ReactNode,
  delayInMs?: number
}) => {

  return <span className={styles.outerSpan}>
    <span className={styles.innerSpan} style={{
      animationDelay: `${p.delayInMs || 0}ms`
    }}>
      {p.children}
    </span>
  </span>

}