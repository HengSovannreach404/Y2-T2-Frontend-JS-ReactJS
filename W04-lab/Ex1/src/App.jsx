import './App.css'

const TaskItem = (props) =>{
    return (
      <div style={{border: '1px solid black', margin: '5px'}}>
        <h2>Id: {props.info.id}  
        <br/>
        Task: {props.info.name}  
        <br/>
        Priority:{props.info.priority}
        </h2>
      </div>
    );
};
function App() {
  const TaskData = { id: 101 , name:"Buy Milk" , priority : "High"};
  return (
    <TaskItem info={TaskData}/>
  );
};

export default App
