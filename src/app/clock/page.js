'use client';

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
  }, []);

  if (!timeData) return <p>Loading...</p>;

  return (
    <div>
      <h1>Current Time Information</h1>
      <p>Year: {timeData.year}</p>
      <p>Date: {timeData.date}</p>
      <p>Time: {timeData.time}</p>
    </div>
  );
}
