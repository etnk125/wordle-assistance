import React from "react";
import Words from "./Words";

function AvailableWords({ availableWords, onWordClick }) {
  return (
    <>
      {
        <Words
          title={"Available"}
          words={availableWords}
          onWordClick={onWordClick}
        />
      }
    </>
  );
}

export default AvailableWords;
