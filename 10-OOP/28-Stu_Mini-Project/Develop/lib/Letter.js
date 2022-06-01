class Letter {
  constructor(letter) {
    this.char = letter;
    this.visible = "!@#$%^&*()".includes(letter) ? true : false;
    this.lastGuess = null;
  }
  guess(userInput) {
    this.lastGuess = userInput;
    if (this.lastGuess === this.letter) return;
  }
}

module.exports = Letter;
