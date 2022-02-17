import React from "react";
import SubmittedWord from "./SubmittedWord";

function SubmittedWords({ submittedWords }) {
  return (
    <div className="submitted-words">
      {/* {Array.from({ length: submittedWords.length }, (_, idx) => {
        return <div>{"he"}</div>;
      })} */}
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
