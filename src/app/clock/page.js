"use client";
import "./page.css";
import { useEffect, useState } from "react";

export default function ClockPage() {
  const [timeData, setTimeData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/klokke");
        const result = await response.json();
        setTimeData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const spinningText = document.querySelector(".spinning-text");

    if (spinningText && timeData) {
      function updateRotation() {
        const now = new Date();
        const seconds = now.getSeconds();

        const correctedSeconds = (seconds + 15) % 60;

        const rotation = (correctedSeconds * 6) % 360;

        spinningText.style.transform = `rotate(${rotation}deg)`;

        requestAnimationFrame(updateRotation);
      }

      updateRotation();
    }

    return () => {};
  }, [timeData]);

  if (!timeData) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="Header">Today's Time And Date</h1>
      <div className="box">
        <div className="clock">
          <div className="clock-text">
            <p>Y: {timeData.year}</p>
            <p>D: {timeData.date}</p>
          </div>
          <div className="Container">
            <p className="spinning-text">Time: {timeData.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
