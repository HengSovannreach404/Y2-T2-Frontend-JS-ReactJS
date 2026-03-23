import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ToggleBox from './components/ToggleBox/ToggleBox';
import AsyncCounter from './components/AsyncCounter/AsyncCounter';

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 flex gap-4 bg-gray-800 text-white">
        <Link to="/">Toggle</Link>
        <Link to="/counter">Counter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ToggleBox />} />
        <Route path="/counter" element={<AsyncCounter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
