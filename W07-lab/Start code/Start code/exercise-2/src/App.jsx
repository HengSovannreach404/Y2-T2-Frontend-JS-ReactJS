import React, { useState } from "react";
function App() {
  /* You will need to use a string state to keep the value of the text entered */
  const [text, setText] = useState("");

  /* You will need a function to handle changes on the input and update the state*/
  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input value={text} onChange={handleTextChange} />

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in upper case */}
        <input disabled value={text.toUpperCase()} />
      </p>
    </main>
  );
}

export default App;
