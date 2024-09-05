"use client";

import "./page.css";
import { useEffect, useState } from "react";

export default function Home() {
    const [time, setTime] = useState('--:--:--');

    const fetchTime = () => {
        const apiUrl = 'http://127.0.0.1:5000/api/clock';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setTime(data.time);
            })
            .catch(error => {
                console.error('Error fetching time:', error);
            });
    };

    useEffect(() => {
        
        fetchTime();
    }, []);

    return (
        <div className="clock-container">
            <h1>Current Time</h1>
            <div className="time" id="clock">{time}</div>  {/* Render the state variable */}
            <button className="refresh-btn" onClick={fetchTime}>Refresh Time</button>
        </div>
    );
}
