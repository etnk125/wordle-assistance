import React, { useContext } from "react";
import GuessingWords from "./GuessingWords";
import AvailableWords from "./AvailableWords";
import "./WordListsContainer.css";
import { StateContext } from "../App";

function WordsContainer({ availableWords, goodWords, badWords }) {
  const { onWordClick } = useContext(StateContext);
  return (
    <div className="word-lists-container">
      <AvailableWords
        availableWords={availableWords}
        onWordClick={onWordClick}
      />
      <GuessingWords
        badWords={badWords}
        goodWords={goodWords}
        onWordClick={onWordClick}
      />
    </div>
  );
}

export default WordsContainer;
