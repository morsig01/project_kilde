"use client";

import { useEffect, useState } from "react";
import styles from './CircleAnimation.module.css';

const CircleAnimation = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 10); // Adjust the speed here

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className={styles.movingCircle}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className={styles.circle}></div>
    </div>
  );
};

export default CircleAnimation;