'use client'
import { ReactNode, useRef } from "react"
import styles from "./tlink.module.css"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";


interface TLinkProps extends React.AnchorHTMLAttributes<any> {
  children: ReactNode;
  href: string;
  doesFade: boolean
}

// basically only used for header.

export const TLink = ({
  children,
  href,
  doesFade,
  ...props
}: TLinkProps) => {

  const router = useRouter();
  const path = usePathname();
  const ref = useRef<any>();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (path == href) return;

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    if (main == null || footer == null) return 

    main.classList.add("page-exit");
    footer.classList.add("page-exit");

    setTimeout(function () {
      router.push(href)
    }, 700)
  }

  return <Link
    onClick={handleTransition}
    href={href} {...props} 
    className={classNames(props.className, (path == href && doesFade) && "inactive", styles.tlink)}
    ref={ref}
  > 
    {children} 
  </Link>
}
