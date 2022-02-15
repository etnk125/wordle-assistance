import React, { useEffect, useRef, useState } from "react";
import "./Letter.css";

function Letter(props) {
  const { letter, pos, onCreateLetter } = props;
  const [state, setState] = useState(0);
  console.log("from letter");
  // console.log(letter.toUpperCase(), state, pos);

  // const setup = useRef(() => {});
  // setup.current = () => {
  //   // onCreateLetter(letter.toUpperCase(), state, pos);
  // };
  // useEffect(() => {
  //   setup.current();
  // }, []);
  function onLetterClick(event) {
    event.preventDefault();
    setState((prev) => 1);
  }
  if (state === 1) {
    const hee = document.getElementById(letter + pos);
    hee.classList.add("have");
  }
  console.log(state);
  return (
    <button
      className="letter"
      id={letter + pos}
      onClick={(e) => onLetterClick(e)}
    >
      {letter}
    </button>
  );
}

export default Letter;
