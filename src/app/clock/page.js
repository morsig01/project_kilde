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
      <h1 className='Header'>Tid og dato rn</h1>
      <div className="Box">
        <p>År: {timeData.year}</p>
        <p>Dato: {timeData.date}</p>
        <p>Klokken: {timeData.time}</p>
      </div>
    </div>
  );
}
