import cn from "classnames" 
import styles from "./logo.module.css"

export const Logo = (p: {
  className?: string
}) => {
  return <span className={cn(styles.logo, p.className)}>ZHGr</span>
}