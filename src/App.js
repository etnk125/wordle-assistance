import "./App.css";
import React, {
  useEffect,
  useState,
  useRef,
  createContext,
  useContext,
} from "react";
import "./color.css";
import getWords from "./Data";

let STATES = ["white", "grey", "yellow", "green"];

const StateContext = createContext();
function App() {
  const [goodWords, setGoodWords] = useState([]);
  const [allWords, setAllWords] = useState([]);
  const [submittedWords, setSubmittedWords] = useState([]);
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

  // useEffect(() => {}, [states]);

  function onWordClick(e, word) {
    e.preventDefault();
    // console.log(word);
    setSubmittedWords((prev) => [
      ...prev,
      { word: word, id: Date.now().toString() },
    ]);
  }

  // console.log(states);

  return (
    <>
      <header>
        <h1>WORDLE assistance</h1>
      </header>

      <StateContext.Provider value={{ states, onLetterClick }}>
        <article>
          <SubmittedWords
            submittedWords={submittedWords}
            states={states}
            setStates={setStates}
          />
          <AvailableWords
            availableWords={availableWords}
            onClick={onWordClick}
          />
        </article>
      </StateContext.Provider>
    </>
  );

  function onLetterClick(e, letter, index, setState) {
    e.preventDefault();
    let tempStates = states;
    tempStates[letter][index] = (tempStates[letter][index] + 1) % 4;
    setStates(tempStates);
    setState(tempStates[letter][index]);
    console.log(tempStates[letter][index]);
  }

  function defaultState() {
    let defState = {};
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .split("")
      .forEach((letter) => (defState[letter] = [0, 0, 0, 0, 0]));
    return defState;
  }
}

function SubmittedWords({ submittedWords, states, setStates }) {
  return (
    <div className="submitted-words">
      {/* {Array.from({ length: submittedWords.length }, (_, idx) => {
        return <div>{"he"}</div>;
      })} */}
      {submittedWords.map(({ word, id }) => (
        <SubmittedWord
          states={states}
          setStates={setStates}
          word={word}
          id={id}
          key={id}
        />
      ))}
    </div>
  );
}

function SubmittedWord({ word, id, states, setStates }) {
  return word
    .split("")
    .map((letter, idx) => (
      <SubmittedLetter
        key={id + idx}
        letter={letter}
        index={idx}
        states={states}
        setStates={setStates}
      />
    ));
}
function SubmittedLetter({ letter, index }) {
  const [state, setState] = useState(0);
  const { states, onLetterClick } = useContext(StateContext);
  return (
    <button
      className={"submitted-letter " + STATES[state]}
      onClick={(e) => {
        onLetterClick(e, letter, index, setState);
      }}
    >
      {letter}
    </button>
  );
}

function AvailableWords({ availableWords, onClick }) {
  return (
    <>
      <h3>{availableWords.length} Available Word(s)</h3>
      <section className="available-words">
        {availableWords.map((word) => (
          <button onClick={(e) => onClick(e, word.toUpperCase())} key={word}>
            {word.toUpperCase()}
          </button>
        ))}
      </section>
    </>
  );
}

export default App;
