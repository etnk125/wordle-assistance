import React, { useState, useEffect, useRef } from "react";
import Word from "./Word";

function Words(props) {
  // const [words, setWords] = useState([]);
  // const fetchWords = useRef(() => {});
  // fetchWords.current = () => {};
  // useEffect(() => {
  //   fetchWords.current();
  //   // setWords(props.words);
  console.log(props.words);
  // }, [props.words, fetchWords]);
  return (
    <>
      {props.words.map((word) => (
        <Word word={word} key={word} />
      ))}
    </>
  );
}

export default Words;
// let fetchWords = useRef(() => {});

//   fetchWords.current = () => {
//     setWords(props.words);
//   };

//   useEffect(() => {
//     fetchWords.current();
//   }, [fetchWords, setWords]);
