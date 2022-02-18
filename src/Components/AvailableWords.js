import React from "react";
import Words from "./Words";
import "./AvailableWords.css";

function AvailableWords({ availableWords, onWordClick }) {
  return (
    <section className="answer-words">
      <h2>Answer</h2>
      <h5>for submit answer</h5>
      {
        <Words
          title={"Available"}
          words={availableWords}
          onWordClick={onWordClick}
        />
      }
    </section>
  );
}

export default AvailableWords;
