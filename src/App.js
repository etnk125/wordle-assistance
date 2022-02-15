import "./App.css";
import Header from "./Components/Header";
import React, { useEffect, useState, useRef } from "react";
import getWords from "./Data";
import WordList from "./Components/WordList";
import Footer from "./Components/Footer";
import WordLogs from "./Components/WordLogs";

function App() {
  const [goodWords, setGoodWords] = useState([]);
  const [allWords, setAllWords] = useState([]);
  const [wordLog, setWordLog] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [states, setStates] = useState([]);

  const fetchWords = useRef(() => {});
  fetchWords.current = () => {
    const newGoodWords = getWords("goodWords", "en");
    const newBadWords = getWords("badWords", "en");
    setGoodWords((prev) => newGoodWords);
    setAvailableWords((prev) => newGoodWords);
    setAllWords((prev) => [...newGoodWords, ...newBadWords]);
    setStates((prev) => defaultState());
  };
  useEffect(() => {
    fetchWords.current();
  }, []);

  function onWordClick(e, word) {
    e.preventDefault();
    // console.log(word);
    setWordLog((prev) => [...prev, { word: word, id: Date.now().toString() }]);
  }

  function onCreateLetter(letter, letterState, pos) {
    let tempStates = { ...states };
    tempStates[letter][pos] = letterState;
    setStates(tempStates);
  }
  console.log("from app");

  return (
    <>
      <Header />
      <article>
        <WordLogs words={wordLog} onCreateLetter={onCreateLetter} />
        <div className="keyboard">
          <ul>
            <li className="row" id="row1">
              qwertyuiop
            </li>
            <li className="row" id="row2">
              asdfghjkl
            </li>
            <li className="row" id="row3">
              zxcvbnm
            </li>
          </ul>
          <div className="most-letter">
            <div className="button-letter">a</div>
            <div className="button-letter">o</div>
            <div className="button-letter">r</div>
            <div className="button-letter">s</div>
            <div className="button-letter">e</div>
          </div>
        </div>
        <WordList
          title={"Available words"}
          words={availableWords}
          onWordClick={onWordClick}
        />
        <div className="guessing-words">
          5 : guessing word(s)
          <div className="word">word1</div>
          <div className="word">word2</div>
          <div className="word">word3</div>
          <div className="word">word4</div>
          <div className="word">word5</div>
        </div>
      </article>
      <Footer />
    </>
  );

  function defaultState() {
    let defState = {};
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .split("")
      .forEach(
        (letter) => (defState[letter] = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })
      );
    return defState;
  }
}

export default App;
