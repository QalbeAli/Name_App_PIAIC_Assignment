"use client";
import styles from "@/styles/page.module.css"
import { useState } from "react";
export default function Home() {
  const [names] = useState(["Alice", "Bob", "Charlie", "David", "Emma"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextName = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === names.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevName = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? names.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container}>
      <h1>Names</h1>
      {names.length > 0 && (
        <div className={styles.content}>
          <h2 className={styles.name}>{names[currentIndex]}</h2>
          <div className={styles.buttonGroup}>
            <button className={styles.button} onClick={prevName}>
              Previous
            </button>
            <button className={styles.button} onClick={nextName}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
