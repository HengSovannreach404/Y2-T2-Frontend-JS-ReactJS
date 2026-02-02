import './App.css'

function App() {
  const task = ["Learn JSX","Create Components" , "Master State"]
  return (
    <>
    <div>
      <h1>My Task List</h1>
      <ul>
        <li>{task[0]}</li>
        <li>{task[1]}</li>
        <li>{task[2]}</li>
      </ul>
    </div>
    </>
  )
}

export default App
