import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { DarkModeButton, Footer, TLink } from "@/components";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "zhang.rui",
  description: "Rui Zhang - Teaching Assistant ETHZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const iconSize = 32;

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body>
        <header>
          <TLink href="/" className="logo">
            ZHANG.RUI
          </TLink>
          <ul>
            <li title="Home">
              <TLink doesfade href="/" className="link">
                <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#fff" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>
                <p className="underlineLink">
                  Home
                </p>
              </TLink>
            </li>
            <li title="Classes">
              <TLink doesfade className="link" href="/class">
                <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="#fff" viewBox="0 0 256 256"><path d="M240,192h-8V168a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v24H40V56H216v80a8,8,0,0,0,16,0V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-72-16h48v16H168Z"></path></svg>
                <p className="underlineLink">
                  Classes
                </p>
              </TLink>
            </li>
            {/* <DarkModeButton /> */}
          </ul>
        </header>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}