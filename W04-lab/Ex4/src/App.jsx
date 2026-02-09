import { useState } from 'react'
import './App.css'

function App() {
  const [list , setList] = useState(["Task 1"])
  const [newTask, setNewTask] = useState("");
  const handleAdd = () => {
    setList((list) =>[...list , newTask]);
    setNewTask("");
  }

  return (
    <div>
      <h2>My Tasks</h2>
      <input value={newTask} placeholder="Title" onChange={(e) => setNewTask(e.target.value)}/>
      
      <ul>
        {list.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add Item</button>
    </div>
 
  );
}


export default App
