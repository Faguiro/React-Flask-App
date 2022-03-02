import React, { useState, useEffect } from 'react';
import logo from './ice.gif';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [string, str] = useState(0);
  useEffect(() => {
    fetch('https://api-backend-flak.herokuapp.com/time', { mode: 'cors' })
      .then(res => res.json())
      .then(data => {
        setCurrentTime(data.time);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React🤖 + Flask🐍 App📲</p>
        <p>Esta é a data atual: {currentTime}.</p>
        <p>{str}</p>
      </header>
    </div>
  );
}
export default App;
