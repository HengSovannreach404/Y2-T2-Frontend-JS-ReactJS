import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const CounterControls = ({ onAdd, onReset }) => (
  <div className="flex gap-2">
    <button 
      onClick={onAdd} 
      className="bg-blue-100 p-2"
    >
      Add +1
    </button>
    <button 
      onClick={onReset} 
      className="bg-red-100 p-2"
    >
      Reset
    </button>
  </div>
);
function App() {
  const [stats, setStats] = useState({ clicks: 0, lastUpdated: "" });

  const updateStats = (newClicks) => {
    const newData = {clicks: newClicks, lastUpdated: new Date().toLocaleTimeString() };
    setStats(newData);
    localStorage.setItem("stats", JSON.stringify(newData));
  };

  return (
    <div className="p-10">
      <h3>
        Clicks: {stats.clicks} | Last: {stats.lastUpdated}
      </h3>

      <CounterControls
        onAdd={() => updateStats(stats.clicks + 1)}
        // GAP: Pass the reset logic (setting clicks back to 0)
        onReset={() => updateStats(0)}
      />
    </div>
  );
}

export default App
