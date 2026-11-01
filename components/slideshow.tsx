"use client";

import React, { useState } from "react";
import styles from "./Slideshow.module.css";

interface SlideData {
  src: string;
  caption: string;
}

interface SlideshowProps {
  slides: SlideData[];
}

export default function Slideshow({ slides }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className={styles.slideshowContainer}>
      <div className={`${styles.mySlides} ${styles.fade}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slides[currentIndex].src}
          alt={slides[currentIndex].caption}
        />
        <div className={styles.caption}>{slides[currentIndex].caption}</div>
      </div>

      <button className={styles.prev} onClick={handlePrev}>
        &#10094;
      </button>
      <button className={styles.next} onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}
