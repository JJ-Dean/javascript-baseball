const MissionUtils = require('@woowacourse/mission-utils');

const Output = {
  startTxt() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  },

  resultTxt(compare) {
    MissionUtils.Console.print(compare.comapreResult());
  },
};

module.exports = Output;
