'use client'

import Link from "next/link";
import styles from "./not-found.module.css"
import { useEffect, useState } from "react";
import { NOT_FOUND_SENTENCES } from "@/lib";

export default function Page() {
  
  const [message, setMessage] = useState<String>("");
  const length = NOT_FOUND_SENTENCES.length;

  useEffect(() => {
    setMessage(NOT_FOUND_SENTENCES[Math.floor(Math.random() * length)]);
  }, []);

  return <>
  <div className={styles.wrapper}>
    <h1><Link href="https://www.youtube.com/watch?v=Aq5WXmQQooo" className={styles.link}>
        {message}
      </Link></h1>
  </div>
  </>
}
