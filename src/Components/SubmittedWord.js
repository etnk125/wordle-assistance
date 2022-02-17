import React from "react";
import SubmittedLetter from "./SubmittedLetter";

function SubmittedWord({ word, id }) {
  return (
    <>
      {word.split("").map((letter, idx) => (
        <SubmittedLetter
          key={id + idx}
          id={id + idx}
          letter={letter}
          index={idx}
        />
      ))}
    </>
  );
}

export default SubmittedWord;
