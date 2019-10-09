const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0"
  };
  
  function decode(expr) {
    const phraseLength = expr.length / 10;
    let phrase = "";
    for (let i = 0; i < phraseLength; i++) {
      const firstSimbol = i * 10;
      const codedSymbol = expr.substr(firstSimbol, 10);
      if (isSpace(codedSymbol)) {
        phrase = phrase + " ";
      } else {
        const noZeros = removeZeros(codedSymbol);
        const morse = numToMorse(noZeros);
        phrase = phrase + MORSE_TABLE[morse];
      }
    }
    return phrase;
  }
  
  function isSpace(str) {
    return str.indexOf("*") >= 0;
  }
  
  function removeZeros(str) {
    const firstOne = str.indexOf("1");
    return str.substring(firstOne);
  }
  
  function numToMorse(str) {
    let morse = "";
    for (let i = 0; i < str.length / 2; i++) {
      const firstSimbol = i * 2;
      const symbolCode = str.substr(firstSimbol, 2);
      const symbol = symbolCode === "10" ? "." : "-";
      morse = morse + symbol;
    }
    return morse;
  }
  
  module.exports = {
    decode
  };