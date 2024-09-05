import { useState, useEffect } from 'react';
import '../page.css';

export default function ClockPage() {
  const [time, setTime] = useState('--:--:--');


  const fetchTime = async () => {
    try {
      const res = await fetch('/api/clock');
      const data = await res.json();
      setTime(data.time);
    } catch (err) {
      console.error('Error fetching time:', err);
    }
  };

  useEffect(() => {
    fetchTime();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.clockContainer}>
        <h1>Current Time</h1>
        <div style={styles.time}>{time}</div>
        <button onClick={fetchTime} style={styles.refreshButton}>
          Refresh Time
        </button>
      </div>
    </div>
  );
}
  