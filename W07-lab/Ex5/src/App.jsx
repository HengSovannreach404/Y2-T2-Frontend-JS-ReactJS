import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ username: "", email: "" });

  const handleSubmit = (e) => {
    // GAP 1: Stop the browser from refreshing
    e.preventDefault();

    // GAP 2: Save the current formData object to Local Storage
    localStorage.setItem("session", JSON.stringify(formData));
    
    alert("Data Saved to Local Storage!");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-10 flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Name"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <button 
        type="submit" 
        className="bg-black text-white p-2"
      >
        Save Session
      </button>
    </form>
  );
}

export default App
