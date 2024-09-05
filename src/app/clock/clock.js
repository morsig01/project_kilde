import { useState, useEffect } from 'react';

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

  // Fetch time when the component mounts
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

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
  },
  clockContainer: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  time: {
    fontSize: '3em',
    margin: '20px 0',
  },
  refreshButton: {
    padding: '10px 20px',
    fontSize: '1.2em',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};