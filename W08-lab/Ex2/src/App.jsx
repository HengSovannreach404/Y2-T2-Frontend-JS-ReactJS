import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './components/Modal/DeleteModal'
import DeleteModal from './components/Modal/DeleteModal'

function App() {
  return (
    <div className="App">
          <DeleteModal/>
      </div>
  )
}

export default App
