import './App.css'

const TaskItem = ()=> <li>Individual Task</li>;

const TaskContainer = ()=> {
  return (
    <fieldset>
      <legend>My List</legend>
      <ul>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
      </ul>
    </fieldset>

  );
};
function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskContainer />
    </div>
  );
}

export default App
