import React, { useContext } from "react";
import { StateContext } from "../App";
import "./StateColor.css";
import "./SubmittedLetter.css";

function SubmittedLetter({ letter, index, id }) {
  const STATES = ["white", "grey", "yellow", "green"];
  const { onLetterClick, getState } = useContext(StateContext);
  return (
    <button
      key={id + "letter"}
      className={"submitted-letter " + STATES[getState(letter, index)]}
      onClick={(e) => {
        onLetterClick(e, letter, index);
      }}
    >
      {letter}
    </button>
  );
}

export default SubmittedLetter;
