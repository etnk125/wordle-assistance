import React, { useEffect, useState } from "react";
import Letter from "./Letter";
import "./WordLog.css";

function WordLog(props) {
  const { word, onCreateLetter } = props;
  console.log("from word log");
  // const [word, setWord] = useState("");
  // useEffect(() => {
  //   setWord((prev) => props.word);
  // }, []);
  const wordElements = word
    .split("")
    .map((letter, idx) => (
      <Letter
        key={Date.now().toString() + idx}
        pos={idx + 1}
        letter={letter}
        onCreateLetter={onCreateLetter}
      />
    ));
  return (
    <>
      <div className="letter-grid">{wordElements}</div>
    </>
  );
}

export default WordLog;
