import React, { useState, useEffect } from "react";
import getData from "../Data";
import Words from "./Words";

function Main() {
  const [suggests, setSuggests] = useState([]);
  const [showingWords, setShowingWords] = useState([]);
  const [showingNumber, setShowingNumber] = useState(2);

  function resetData() {
    setShowingNumber(2);
    setShowingWords(suggests.slice(0, showingNumber));
  }
  function changeData() {
    setSuggests(["this", "is", "new", "data", "naja"]);
    resetData();
  }
  function moreWord() {
    setShowingWords([
      ...showingWords,
      ...suggests.slice(showingNumber, showingNumber + 2),
    ]);
    setShowingNumber(showingNumber + 2);
  }
  useEffect(() => {
    setSuggests(getData("suggests", "en"));
    console.log(
      suggests,
      showingNumber,
      suggests.slice(0, showingNumber),
      "effect"
    );
    setShowingWords(suggests.slice(0, showingNumber));
  }, [suggests, showingNumber]);
  // console.log(suggests, showingWords, showingNumber);
  return (
    <>
      <h3>There are {suggests.length} words</h3>
      <Words words={showingWords} />
      <button
        onClick={() => {
          moreWord();
        }}
      >
        more
      </button>
      <button
        onClick={() => {
          console.log("clicked");
          changeData();
        }}
      >
        change data
      </button>
    </>
  );
}

export default Main;
