const Letter = require("./Letter");

class Word {
  constructor(word, letters){
      this.word = word;
      this.letters = word.split('')
  }
}

module.exports = Word;
