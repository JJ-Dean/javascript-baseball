const Input = require('./UiLogic/Input');
const Output = require('./UiLogic/Output');

class App {
  play() {
    Output.startTxt();
  }
}

const app = new App();
app.play();
module.exports = App;
