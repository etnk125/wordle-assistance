import React from "react";
import "./MostLetter.css";

function MostLetter({ letters, selectLetter, unselectLetter, tag }) {
  if (!!tag && tag.length === 0) {
    for (const btn of document.getElementsByClassName("tag-button")) {
      btn.classList.remove("selected");
    }
  }
  return (
    <section className="most-letter-container">
      <h3 className="most-letter-title">
        most found letter | sorted by frequency
      </h3>
      {letters.map((letter) => (
        <button
          className="tag-btn"
          id={"tag" + letter}
          key={"tag" + letter}
          onClick={(e) => onClickHandler(e, letter)}
        >
          {letter}
        </button>
      ))}
    </section>
  );
  function onClickHandler(e, letter) {
    e.preventDefault();
    let btnClass = document.getElementById("tag" + letter).classList;
    if (btnClass.contains("selected")) {
      unselectLetter(letter);
    } else {
      selectLetter(letter);
    }
    btnClass.toggle("selected");
  }
}

export default MostLetter;
