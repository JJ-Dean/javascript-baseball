class Compare {
  #answer;

  constructor(answer) {
    this.#answer = answer;
  }

  initCount(inputArr) {
    this.ball = 0;
    this.strike = 0;
    this.compare(inputArr);
  }

  compare(inputArr) {
    const ANSWERARR = this.#answer;
    inputArr.map((number, index) => {
      if (ANSWERARR.includes(number) && ANSWERARR[index] === number)
        return this.strike++;
      if (ANSWERARR.includes(number) && ANSWERARR[index] !== number)
        return this.ball++;
    });
  }

  comapreResult() {
    let resultTxt = '';
    if (this.ball !== 0) resultTxt += `${this.ball}볼`;
    if (this.strike !== 0) resultTxt += `${this.strike}스트라이크`;
    if (resultTxt === '') resultTxt += `낫싱`;
    console.log(resultTxt);
    return resultTxt;
  }
}

module.exports = Compare;
