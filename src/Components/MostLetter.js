import React from "react";
import "./MostLetter.css";

function MostLetter({ letters, selectLetter, unselectLetter }) {
  return (
    <>
      {letters.map((letter) => (
        <button
          className="tag-button"
          id={"tag" + letter}
          key={"tag" + letter}
          onClick={(e) => onClickHandler(e, letter)}
        >
          {letter}
        </button>
      ))}
    </>
  );
  function onClickHandler(e, letter) {
    e.preventDefault();
    let btnClass = document.getElementById("tag" + letter).classList;
    if (btnClass.contains("selected")) {
      selectLetter(letter);
    } else {
      unselectLetter(letter);
    }
    btnClass.toggle("selected");
  }
}

export default MostLetter;
