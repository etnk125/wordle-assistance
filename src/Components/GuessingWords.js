import React from "react";
import Words from "./Words";

function GuessingWords({ goodWords, badWords, onWordClick }) {
  return (
    <>
      <Words title="High chance" words={goodWords} onWordClick={onWordClick} />
      <Words title="Low chance" words={badWords} onWordClick={onWordClick} />
    </>
  );
}

export default GuessingWords;
