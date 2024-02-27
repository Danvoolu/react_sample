"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const IntersectionObserverTest = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const option: IntersectionObserverInit = {
      root: parentRef.current,
      rootMargin: "-20% 0px",
      //threshold: 0,
    };

    const observer = new IntersectionObserver(intersect, option);

    const targetElements = document.querySelectorAll("#children");
    if (!targetElements) return;

    //observer.observe(imgRef.current);

    targetElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      // targetElements.forEach(el => {
      //   observer.disconnect();
      // })
    };
  }, []);

  function intersect(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      const num = Number(entry.target.getAttribute("data-num"));
      if (entry.isIntersecting) {
        // 監視中の要素が交差した状態ならtrue
        // 監視中の要素が交差したときの処理
        console.log("In", num);
      } else {
        // 監視中の要素が交差してない状態ならfalse
        // 監視中の要素が交差していないときの処理
        console.log("Out", num, `${num + 1}が連動対象にする`);
      }
    });
  }

  return (
    <div className={styles.parent} ref={parentRef}>
      <div
        id="children"
        className={styles.children}
        style={{ backgroundColor: "#fce4d6" }}
        data-num="1"
      >
        要素1
      </div>
      <div
        id="children"
        className={styles.children}
        style={{ backgroundColor: "#5f6527" }}
        data-num="2"
      >
        要素2
      </div>
      <div
        id="children"
        className={styles.children}
        style={{ backgroundColor: "#bbe2f1" }}
        data-num="3"
      >
        要素3
      </div>
      <div
        id="children"
        className={styles.children}
        style={{ backgroundColor: "#e6afcf" }}
        data-num="4"
      >
        要素4
      </div>
      <div
        id="children"
        className={styles.children}
        style={{ backgroundColor: "#d3d3d8" }}
        data-num="5"
      >
        要素5
      </div>
    </div>
  );
};
export default IntersectionObserverTest;
