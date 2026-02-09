import { useState } from 'react'
import './App.css'

function App() {
  const [title , setTitle] = useState("");
  const [decs , setDecs] = useState("")

  return (
    <form>
      <input value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
      <input value={decs} placeholder="Description" onChange={(e) => setDecs(e.target.value)}/>
      <p>Preview : {title} - {decs}</p>
    </form>
  )
}
export default App
