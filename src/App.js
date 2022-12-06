const Input = require('./UiLogic/Input');
const Output = require('./UiLogic/Output');
const AnswerMaker = require('./AnswerMaker');

class App {
  play() {
    Output.startTxt();
    this.makeAnswer();
  }

  makeAnswer() {
    this.answerArr = AnswerMaker.makeAnswer();
    console.log(this.answerArr);
    this.getInput();
  }

  getInput() {
    Input.reciveNumber(this.answerArr);
  }
}

const app = new App();
app.play();
module.exports = App;
