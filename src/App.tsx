import React, { useState } from 'react';
import './App.css';
import Timer from "./Components/Timer/Timer";

const App = () => {
  const [currentTotalTime, setCurrentTotalTime] = useState(25);

  const startNextPeriod = () => {
    setCurrentTotalTime(5);
  };

  return (
    <Timer 
      timePeriod={currentTotalTime}
      startNextPeriod={startNextPeriod}
    />
  )
}

export default App;
