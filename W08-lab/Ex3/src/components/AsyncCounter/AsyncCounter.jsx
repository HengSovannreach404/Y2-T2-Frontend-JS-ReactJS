import { useState } from 'react';

export default function AsyncCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);  
  };

  return (
    <div className="p-4">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+1 (Reliable)</button>
    </div>
  );
}