'use client'
import { ReactNode, useContext, useRef } from "react"
import styles from "./tlink.module.css"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import React from "react";
import { GrabContext } from "../horizontal_gallery";


interface TLinkProps extends React.AnchorHTMLAttributes<any> {
  children: ReactNode;
  href: string;
  doesfade?: boolean
}

// basically only used for header.

export const TLink = ({
  children,
  href,
  doesfade,
  onClick,
  ...props
}: TLinkProps) => {

  const router = useRouter();
  const path = usePathname();
  const ref = useRef<any>();

  const grabbingContext = useContext(GrabContext);
  // literally most scuffed code I have ever written.

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (grabbingContext && Math.abs(grabbingContext.clickOffset) > 10) {
      return;
    }

    if (path == href) return;

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    if (main == null || footer == null) return 

    main.classList.add("page-exit");
    footer.classList.add("page-exit");

    setTimeout(function () {
      router.push(href);
    }, 700)
  }

  return <Link
    onClick={handleTransition}
    href={href} {...props} 
    className={classNames(props.className, (path == href && doesfade) && "inactive", styles.tlink)}
    ref={ref}
  > 
    {children} 
  </Link>
}
