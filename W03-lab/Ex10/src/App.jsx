import { useState } from 'react'
import './App.css'

function App() {
  const [isUrgent, setIsUrgent] = useState(false);

  return (
  <div style={{color: isUrgent ? "red" : "black"}}>
      <h2>Task Status</h2>
      <button onClick={() => setIsUrgent(!isUrgent)}>
        Toggle Urgency
      </button>
  </div>
  );
}

export default App
