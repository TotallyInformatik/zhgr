"use client";
import { ReactNode, useEffect } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor"

export default function Template({children}: {children: ReactNode}) {

  useEffect(() => {

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    if (main == null || footer == null) return 

    main.classList.remove("page-exit");
    footer.classList.remove("page-exit");
    
  }, [])

  return <>
    <div
      // initial={{ opacity: 0, transform: "translateY(-25px) scale(0.98)" }}
      // animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
      // exit={{ opacity: 0, transform: "translateY(-25px) scale(0.98)" }}
      // transition={{ duration: 0.4 }}
    >
      <SmoothCursor springConfig={{
        damping: 30,
        stiffness: 1200,
        mass: 0.1,
        restDelta: 0.001,
      }}/>
      <main>
        {children}
      </main>
    </div>
  </>
}