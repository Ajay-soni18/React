import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let counter = 0;

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    console.log(counter);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };
  const substractValue = () => {
    console.log(counter);
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Ajay Soni</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={substractValue}>Substract Value</button>
    </>
  );
}

export default App;
