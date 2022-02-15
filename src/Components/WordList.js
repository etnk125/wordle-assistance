import React from "react";

function WordList(props) {
  const { title, words, onWordClick } = props;
  console.log("from word list");
  return (
    <>
      {`${words.length}: ${title}`}

      {words.map((word) => (
        <button
          key={word}
          onClick={(e) => {
            e.preventDefault();
            onWordClick(e, word);
            console.log("click");
          }}
        >
          {word || ""}
        </button>
      ))}
    </>
  );
}

export default WordList;
