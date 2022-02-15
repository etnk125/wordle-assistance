const Word = {
  en: {
    goodWords: ["frame", "elder", "crane", "skill", "skate"],
    badWords: [
      "aaaaa",
      "bbbbb",
      "ccccc",
      "ddddd",
      "frame",
      "elder",
      "crane",
      "skill",
    ],
  },
};

function getWord(type, lang) {
  // console.log(type, lang);
  return Word[lang][type];
}

export default getWord;
