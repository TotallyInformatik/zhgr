'use client'
import { useEffect, useState } from 'react';
import styles from './cursor.module.css';

export const Cursor = () => {

  const [cursorX, setCursorX] = useState(NaN);
  const [cursorY, setCursorY] = useState(NaN);



  const cursorEffect = (e: MouseEvent) => {
    // document.querySelector(styles.cursor)?.animate([{ top: e.clientY, left: e.clientX }, ], 100);
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  }

  useEffect(() => {
    globalThis.addEventListener('mousemove', cursorEffect);

    return () => {
      globalThis.removeEventListener('mousemove', cursorEffect);
    }
  }, []);

  return <div 
      style={{
        top: `${cursorY}px`,
        left: `${cursorX}px`
      }}
      className={styles.cursor}
    >
    
    </div>;
}