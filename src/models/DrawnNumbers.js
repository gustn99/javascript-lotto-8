import Lotto from "../domains/Lotto";

class DrawnNumbers {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = new Lotto(winningNumbers);
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    if (this.#winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 이미 당첨 번호에 포함된 번호입니다.");
    }
  }
}

export default DrawnNumbers;
