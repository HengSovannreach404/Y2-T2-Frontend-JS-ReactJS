import { useState } from 'react'
import './App.css'

function App() {
  const[list] = useState(["Eat", "Sleep" , "Code"])
    return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default App
