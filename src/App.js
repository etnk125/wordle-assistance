import React, { useEffect, useState } from "react";
import "./color.css";

function App() {
  const [states, setStates] = useState([{ A: [0] }]);
  console.log("render", typeof states);
  return (
    <>
      {states[0].A[0]}
      <Btn states={states} onClick={onLetterClick} />
      <Btn states={states} onClick={onLetterClick} />
    </>
  );
  function onLetterClick(e) {
    e.preventDefault();
    let newStates = [...states];
    newStates[0].A[0] ^= 1;
    setStates([...newStates]);
    console.log(states[0].A[0]);
  }
}
const COLOR = ["green", "yellow"];
function Btn({ states, onClick }) {
  // const [state, setState] = useState(0);
  // useEffect(() => {
  //   setState((prev) => states[0].A[0]);
  // }, [states]);
  return (
    <button className={COLOR[states[0].A[0]]} onClick={onClick}>
      {states[0].A[0]}
    </button>
  );
}

export default App;
