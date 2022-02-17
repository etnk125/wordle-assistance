// import "./App.css";
import React, { useEffect, useState, useRef, createContext } from "react";
import getWords from "./Data";
import SubmittedWords from "./Components/SubmittedWords";
import MostLetter from "./Components/MostLetter";
import WordsContainer from "./Components/WordListsContainer";

const StateContext = createContext();
function App() {
  const [goodWords, setGoodWords] = useState([]);
  const [badWords, setBadWords] = useState([]);
  const [submittedWords, setSubmittedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [states, setStates] = useState([]);
  const [letter, setLetter] = useState([]);
  const [tag, setTag] = useState([]);

  const fetchWords = useRef(() => {});
  fetchWords.current = () => {
    const newGoodWords = getWords("goodWords", "en");
    const newBadWords = getWords("badWords", "en");

    setGoodWords((prev) => newGoodWords);
    setAvailableWords((prev) => newGoodWords);
    setBadWords((prev) => newBadWords);
    setStates((prev) => getInitState());
  };
  useEffect(() => {
    fetchWords.current();
  }, []);
  console.log(availableWords, "app");
  return (
    <>
      <header>
        <h1>WORDLE assistance</h1>
      </header>

      <StateContext.Provider value={{ onLetterClick, onWordClick, getState }}>
        <article>
          <SubmittedWords submittedWords={submittedWords} />
          <MostLetter
            letters={letter}
            selectLetter={selectLetter}
            unselectLetter={unselectLetter}
          />
          <WordsContainer
            availableWords={availableWords}
            goodWords={goodWords}
            badWords={badWords}
          />
        </article>
      </StateContext.Provider>
    </>
  );
  function updateUsedLetter() {
    let usedLetter = {};
    availableWords.forEach((word) => {
      word.split("").forEach((letter) => {
        if (usedLetter[letter] === undefined) usedLetter[letter] = 0;
        usedLetter[letter]++;
      });
    });
    let letters = Object.entries(usedLetter)
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => [...r, k], [])
      .filter((letter) => {
        for (let i = 0; i < 5; i++)
          if (getState(letter, i) !== 0) {
            return false;
          }
        return true;
      });
    setLetter(letters);
  }
  function resetLetter() {
    updateUsedLetter();
    setTag([]);
  }

  function selectLetter(letter) {
    setTag((prev) => [...prev, letter]);
  }
  function unselectLetter(letter) {
    setTag((prev) => prev.splice(prev.indexOf(letter), 1));
  }
  function getState(letter, index) {
    return states[index][letter];
  }

  function onWordClick(e, word) {
    e.preventDefault();
    setSubmittedWords((prev) => [
      ...prev,
      { word: word, id: Date.now().toString() },
    ]);
  }

  function updateAvailableWords() {
    let newAvailableWords = [...goodWords];
    states.forEach((state, idx) => {
      for (const key in state) {
        newAvailableWords = newAvailableWords.filter((word) => {
          if (states[idx][key] === 1) {
            return !word.includes(key);
          } else if (states[idx][key] === 2) {
            return word.includes(key) && word[idx] !== key;
          } else if (states[idx][key] === 3) {
            return word[idx] === key;
          } else return true;
        });
      }
    });
    setAvailableWords([...newAvailableWords]);
  }

  function onLetterClick(e, letter, index) {
    e.preventDefault();
    let tempStates = [...states];
    // console.log(states, tempStates[index][letter]);
    tempStates[index][letter] = (tempStates[index][letter] + 1) % 4;
    setStates([...tempStates]);

    updateAvailableWords();
    resetLetter();
  }

  function getInitState() {
    let initState = [{}, {}, {}, {}, {}];
    initState.forEach((e) => {
      "abcdefghijklmnopqrstuvwxyz".split("").forEach((i) => {
        e[i] = 0;
      });
    });
    return initState;
  }
}
export { StateContext };
export default App;
