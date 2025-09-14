'use client'
import { useEffect, useRef, useState } from "react"
import styles from "./footer.module.css"
import Link from "next/link"

export const Footer = () => {

  const iconSize = 32;
  const [count, setCount] = useState(1);

  return <footer className={styles.footer}>
    <div className={styles.flex}>
      <section>
        <h2>Attribution</h2>
        <ul>
          <li>
            Fotos from <Link className="fadeInLink" href="https://unsplash.com/de">Unsplash</Link>
          </li>
          <li>Icons from <Link className="fadeInLink" href="https://phosphoricons.com">Phosphoricons</Link></li>
          <li>Website by Rui Zhang</li>
        </ul>
      </section>
      <section>
        <h2>Social</h2>
        <ul className={styles.shameless}>
          <li>
            <Link className="fadeInLink" href="mailto:contact@zhangrui.ch">
              <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
              contact@zhangrui.ch
            </Link>
          </li>
          <li>
            <Link className="fadeInLink" href="https://github.com/TotallyInformatik">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192ZM200,80a16,16,0,1,1,16-16A16,16,0,0,1,200,80Z"></path></svg>
              @totallyinformatik
            </Link>
          </li>
          <li>
            <Link className="fadeInLink" href="https://ch.linkedin.com/in/rui-zhang-978822290">
              <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#000000" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
              Rui Zhang
            </Link>
          </li>
        </ul>
      </section>
    </div>
    {/* let's see how many people we can troll with this, thinking there is something to do hre */}
    <section className={styles.uselessSection}>
      <h2 onClick={() => {
        setCount(count+1);
      }}>{Math.ceil(count / 2)}</h2>
    </section>
  </footer>
}