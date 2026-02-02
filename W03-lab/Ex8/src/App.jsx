import { useState } from 'react';
import './App.css'

function App() {
  const [list ,setList] = useState(["Task1"]);
  const [input , setInput] =useState("");
  const addTask = () =>{
    if(!input) return;
    setList([...list , input]);
    setInput("");
  }
  return (
    <div>
      <input type="text" value={input}  onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {list.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
      </ul>
    </div>
    
  );
}

export default App
