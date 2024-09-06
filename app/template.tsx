"use client";
import { ReactNode, useEffect } from "react";
import styles from "./transition.module.css"

import { Footer } from "@/components";

export default function Template({children}: {children: ReactNode}) {

  useEffect(() => {

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    if (main == null || footer == null) return 

    main.classList.remove("page-exit");
    footer.classList.remove("page-exit");
    
  }, [])

  return <>
    <div>
      <main>
        {children}
      </main>
    </div>
  </>
}