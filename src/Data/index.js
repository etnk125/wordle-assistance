const Data = {
  en: {
    suggests: ["frame", "elder", "crane", "skill", "skate"],
    allwords: [
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

function getData(type, lang) {
  // console.log(type, lang);
  return Data[lang][type];
}

export default getData;
