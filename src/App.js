const Input = require('./UiLogic/Input');

class App {
  play() {
    Input.start();
  }
}

const app = new App();
app.play();
module.exports = App;
