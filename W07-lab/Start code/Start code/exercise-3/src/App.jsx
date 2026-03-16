import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the input values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(e) {
    setA(e.target.value);
    setIsError(false);
  }

  function onB(e) {
    setB(e.target.value);
    setIsError(false);
  }

  function compute() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    const isValidA = a.trim() !== "" && Number.isFinite(numA);
    const isValidB = b.trim() !== "" && Number.isFinite(numB);

    if (!isValidA || !isValidB) {
      setResult("A and B shall be numbers !");
      setIsError(true);
      return;
    }

    setResult((numA + numB).toString());
    setIsError(false);
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={a} onChange={onA} />

      <label>B =</label>
      <input value={b} onChange={onB} />

      <label>A + B =</label>

      {/* When Compute button is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} className={isError ? "error" : ""} />
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
