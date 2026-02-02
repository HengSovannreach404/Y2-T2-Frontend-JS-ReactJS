import './App.css'
function TodoItem(){
  return <li>Task</li>;
}
function TodoList(){
  return(
    <ul>
        <TodoItem/>
        <TodoItem/>
      </ul>
  );
}
function App() {
  return (
    <div>
      <h1>My App</h1>
      <TodoList/>
    </div>
  );
}

export default App
