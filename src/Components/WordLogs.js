import React from "react";
import WordLog from "./WordLog";

function WordLogs(props) {
  const { words, onCreateLetter } = props;
  const wordElements = words.map((word) => (
    <WordLog key={word.id} word={word.word} onCreateLetter={onCreateLetter} />
  ));
  return (
    <>
      <h2>Word Logs</h2>
      {wordElements}
    </>
  );
}

export default WordLogs;
