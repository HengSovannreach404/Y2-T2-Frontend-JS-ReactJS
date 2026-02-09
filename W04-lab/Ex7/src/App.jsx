import './App.css'

function ProfileIcon({user}){
  return( 
    <div>
      {user}
    </div>
  )
}
function Header({user}){
  return(
    <header>
      <ProfileIcon user = {user}/>
    </header>
  )
}
function App() {
  const user = "Jonh Doe";

  return (
    <Header user = {user}/>
  )
}

export default App
