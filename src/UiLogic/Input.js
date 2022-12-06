const MissionUtils = require('@woowacourse/mission-utils');

const Input = {
  reciveNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.lengthException(answer);
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
    const InputArr = number.split('').map((x) => {
      if (!regNumber.test(x)) throw new Error('숫자를 입력해주세요.');
      return parseInt(x, 10);
    });
    this.dupException(InputArr);
  },

  dupException(InputArr) {
    const SET = new Set(InputArr);
    const DEDUPLICATION = [...SET];
    if (DEDUPLICATION.length !== 3)
      throw new Error('중복된 값은 입력할 수 없습니다.');
  },
};

module.exports = Input;
