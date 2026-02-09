import './App.css'

function TaskList({ tasks }){
  return(
    <ul>
      {tasks.map((task , index) => (
      <li key={index}>{task}</li>
      ))}
    </ul>
  )
}
function EmptyMessage (){
  return(<p>No tasks available. Please add a task.</p>)
}
function App() {
  const tasks = []

  return (
    <div>
      {tasks.length === 0 ? (
        <EmptyMessage />
      ) : (
        <TaskList tasks={tasks} />
      )}
    </div>

  )
}

export default App
