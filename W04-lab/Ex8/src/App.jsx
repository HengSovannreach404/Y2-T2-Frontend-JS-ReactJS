import { useState } from 'react'
import './App.css'

const ColorPicker = ({ onColorChange }) => (
  <input type="color" onChange={(e) => onColorChange (e.target.value)} />
);

function App() {
  const [bg , setBg] = useState("#ffffff")
  return (
    <div style={{backgroundColor : bg ,height: '100vh',padding: '20px'}}>
      <ColorPicker onColorChange={setBg}/>
      
    </div>
  )
}

export default App
