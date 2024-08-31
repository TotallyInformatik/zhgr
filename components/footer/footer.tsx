'use client'
import { useEffect, useRef } from "react"
import styles from "./footer.module.css"

export const Footer = () => {

  const currentYear = new Date().getFullYear()
  const credits = `© ${currentYear} website by rui zhang at eth zurich. some logos by phosphor icons. `
  const repeatedCredits = credits.repeat(2);

  const span1 = useRef<any>(null!);
  const span2 = useRef<any>(null!);

  // TODO: make this actually work.

  const scrollAnimation = () => {
    const spanWidth = span1.current.scrollWidth;
    span2.current.style.left = `${spanWidth}px`;

    setInterval(function(){
      const currentStyle1 = span1.current.style;
      const currentStyle2 = span2.current.style;

      const newCurrentLeft1 = currentStyle1.left.replace("px", "") - 0.2;
      currentStyle1.left = `${newCurrentLeft1}px`;

      const newCurrentLeft2 = currentStyle2.left.trim("px") - 0.2;
      currentStyle2.left = `${newCurrentLeft2}px`;
    }, 100);
  };

  useEffect(() => {
    scrollAnimation();
  })

  return <footer className={styles.footer}>
    <span ref={span1}> { repeatedCredits } </span>
    <span ref={span2}> { repeatedCredits } </span>
  </footer>
}