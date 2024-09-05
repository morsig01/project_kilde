'use client';
import "./page.css";
import { useEffect, useState } from 'react';

export default function ClockPage() {
  const [timeData, setTimeData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/klokke');
        const result = await response.json();
        setTimeData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (!timeData) return <p>Loading...</p>;

  return (
    <div>
      <h1 className='Header'>Todays Time And Date</h1>
      <div className="box">
        <div className="clock">
          <div className="clock-text">
        <p>Y: {timeData.year}</p>
        <p>D: {timeData.date}</p>
        <p>Time: {timeData.time}</p>
      </div>
      </div>
      </div>
    </div>
  );
}
