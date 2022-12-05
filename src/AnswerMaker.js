const MissionUtils = require('@woowacourse/mission-utils');

const AnswerMaker = {
  makeAnswer() {
    let answerArr = [];
    while (answerArr.length < 3) {
      let newNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (answerArr.indexOf(newNumber) === -1) {
        answerArr.push(newNumber);
      }
    }
    return answerArr;
  },
};

module.exports = AnswerMaker;
