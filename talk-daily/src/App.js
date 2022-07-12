import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000);
    return () => clearInterval(timer)
  })

  const today = Date();
  const currentTimeDate = new Date();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Today</h1>
        <h4>{today}</h4>
      </header>
    </div>
  );
}

export default App;
