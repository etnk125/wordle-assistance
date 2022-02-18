import React, { useState } from "react";
import "./Words.css";

function Words({ title, words, onWordClick }) {
  const DEFAULT_LIMIT = 30;
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  const WordElement = (word) => {
    return (
      <button
        className="word-btn"
        key={title + word}
        onClick={(e) => {
          onWordClick(e, word);
          setLimit(DEFAULT_LIMIT);
        }}
      >
        {word.toUpperCase()}
      </button>
    );
  };

  return (
    <div className="words-container">
      <h3>
        {words.length} {title} Word(s)
      </h3>
      <div className="words">{words.slice(0, limit).map(WordElement)}</div>
      {words.length >= limit && (
        <button className="loadmore-btn" onClick={loadmore}>
          ...
        </button>
      )}
    </div>
  );
  function loadmore(e) {
    e.preventDefault();
    setLimit((prev) => prev + DEFAULT_LIMIT);
  }
}

export default Words;
