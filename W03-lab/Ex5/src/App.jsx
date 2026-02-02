import './App.css'
function TodoItem(){
  return <li>A Single Task</li>;
}

function App() {
  return (
    <div>
      <ul>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </ul>
    </div>
  );
}

export default App
