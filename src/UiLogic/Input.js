const MissionUtils = require('@woowacourse/mission-utils');
const Compare = require('../DomainLogic/Compare');
const Output = require('./Output');

const Input = {
  reciveNumber(answerArr) {
    this.answerArr = answerArr;
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.lengthException(answer);
      this.comparePrepare(this.answerArr);
    });
  },

  lengthException(number) {
    if (number.length !== 3) {
      throw Error('3자리 숫자를 입력해주세요.');
    }
    this.numberException(number);
  },

  numberException(number) {
    const regNumber = /^[1-9]$/;
    this.inputArr = number.split('').map((x) => {
      if (!regNumber.test(x)) throw new Error('숫자를 입력해주세요.');
      return parseInt(x, 10);
    });
    this.dupException(this.inputArr);
  },

  dupException(inputArr) {
    const SET = new Set(inputArr);
    const DEDUPLICATION = [...SET];
    if (DEDUPLICATION.length !== 3)
      throw new Error('중복된 값은 입력할 수 없습니다.');
  },

  comparePrepare(answerArr) {
    this.compare = new Compare(answerArr);
    this.compareStep();
  },

  compareStep() {
    this.compare.initCount(this.inputArr);
    Output.resultTxt(this.compare);
    this.afterCompare();
  },

  afterCompare() {
    const result = this.compare.after();
    if (result) return this.afterThreeStrike();
  },

  afterThreeStrike() {
    Output.finishTxt();
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n',
      (answer) => {
        this.retryOrQuit(answer);
      }
    );
  },

  retryOrQuit(number) {
    if (number === '1') return this.retry();
    if (number === '2') return this.quit();
  },

  retry() {},

  quit() {
    MissionUtils.Console.close();
  },
};

module.exports = Input;
