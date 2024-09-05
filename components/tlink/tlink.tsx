'use client'
import { ReactNode } from "react"
import styles from "./tlink.module.css"
import Link from "next/link";
import { useRouter } from "next/navigation";


interface TLinkProps extends React.AnchorHTMLAttributes<any> {
  children: ReactNode;
  href: string
}

export const TLink = ({
  children,
  href,
  ...props
}: TLinkProps) => {

  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    if (main == null || footer == null) return 

    main.classList.add("page-exit");
    footer.classList.add("page-exit");

    setTimeout(function () {
      router.push(href)
    }, 800)
    setTimeout(function () {
      main.classList.remove("page-exit");
      footer.classList.remove("page-exit");
    }, 950)



  }

  return <Link
    onClick={handleTransition}
    href={href} {...props} 
  > 
    {children} 
  </Link>
}
