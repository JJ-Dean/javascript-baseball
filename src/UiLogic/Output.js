const MissionUtils = require('@woowacourse/mission-utils');

const Output = {
  startTxt() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  },

  resultTxt(compare) {
    MissionUtils.Console.print(compare.comapreResult());
  },

  finishTxt() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },
};

module.exports = Output;
