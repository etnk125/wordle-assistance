import React from "react";
import SubmittedWord from "./SubmittedWord";
import "./SubmittedWords.css";

function SubmittedWords({ submittedWords }) {
  return (
    <div className="submitted-words">
      {submittedWords.map(({ word, id }, idx) => {
        return (
          <>
            <SubmittedWord word={word} id={id + idx} key={id + idx} />
          </>
        );
      })}
    </div>
  );
}
export default SubmittedWords;
