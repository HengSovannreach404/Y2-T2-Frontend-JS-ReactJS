import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Rating  = ({ currentStars , onUpdate }) => (
  <div>
    <p>Current Rating: {currentStars} </p>
    <button onClick={() => onUpdate(5)}>Rate 5 Stars</button>
  </div>
)
function App() {
  const [movie, setMovie] = useState({ title: "Inception", stars: 0 });

  const handleScoreUpdate = (newStars) => {
    const updatedMovie = { ...movie, stars: newStars };
    setMovie(updatedMovie);
    localStorage.setItem("movie", JSON.stringify(updatedMovie));
  };

  return (
    <div className="p-10 border shadow-lg">
      <h1>Movie</h1>
      <h2>{movie.title}</h2>

      {/* GAP 2: Pass the callback function to the child component */}
      <Rating currentStars={movie.stars} onUpdate={handleScoreUpdate} />
    </div>
  );
}

export default App
