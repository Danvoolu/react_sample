import Image from "next/image";
import styles from "./page.module.css";
import IntersectionObserver from "@/components/IntersectionObserverTest";

export default function Home() {
  return (
    <main className={styles.main}>
      <IntersectionObserver />
    </main>
  );
}
