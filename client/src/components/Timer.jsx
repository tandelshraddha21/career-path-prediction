import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime,id, onTimeUp }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(()=>{
    setTime(initialTime)
  },[id])

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime === 0) {
          clearInterval(timer);
          onTimeUp();
          return initialTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, [onTimeUp]);

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Countdown:</h2>
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default Timer;
