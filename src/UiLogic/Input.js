const MissionUtils = require('@woowacourse/mission-utils');
const Compare = require('../DomainLogic/Compare');
const Output = require('./Output');

const Input = {
  reciveNumber(answerArr) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.lengthException(answer);
      this.comparePrepare(answerArr);
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
    console.log(number);
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
  },
};

module.exports = Input;
