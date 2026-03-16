import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const defaultUser = { name: "Guest", visits: 0 };

  // GAP: Initialize state by reading 'user_data' from localStorage
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user_data");
    // const saved = localStorage.setItem("user_data", '{"name": "Reach", "visits": 99}');
    return saved ? JSON.parse(saved) : defaultUser;
  });

  return (
    <div className="p-10">
      <div>
        <h1>Welcome, {user.name}</h1>
      </div>
      <p>Visits: {user.visits}</p>
    </div>
  );
  
          

}

export default App
