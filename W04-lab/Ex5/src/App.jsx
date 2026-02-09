import { useState } from 'react'
import './App.css'
const TaskItem = ({ name , onRemove}) => (
    <li>
      {name} 
      <button onClick={onRemove}>Delete</button>
    </li>
);
function App() {
  const [task ,setTask] = useState(["Reacts", "JSX", "Props"]);

  const removeTask = (index)=>{ 
    const newTask = task.filter((task, i) => i !== index);
    setTask(newTask);
  }
  return (
    <ul>
      {task.map((t, i) => <TaskItem key={i} name={t} onRemove={() => removeTask(i)}/>)}
    </ul>
  )
}

export default App
