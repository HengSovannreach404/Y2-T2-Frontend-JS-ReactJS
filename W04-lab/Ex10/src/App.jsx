import { useState } from 'react'
import './App.css'

function App() {
  const [search , setSearch] = useState("")
  const items = ["Apple", "Banana" , "Cherry"]

  const filterItems = items.filter(item => item.includes(search))
  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      {filterItems}
    </div>
  )
}

export default App
