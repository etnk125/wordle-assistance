import React from "react";
import Words from "./Words";
import "./GuessingWords.css";

function GuessingWords({ goodWords, badWords, onWordClick }) {
  return (
    <section className="guess-words">
      <h2>Guess</h2>
      <h5> for get more info</h5>
      <Words title="High chance" words={goodWords} onWordClick={onWordClick} />
      <Words title="Low chance" words={badWords} onWordClick={onWordClick} />
    </section>
  );
}

export default GuessingWords;
