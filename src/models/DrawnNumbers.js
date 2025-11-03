import { LOTTO_MAX_VALUE, LOTTO_MIN_VALUE } from "../constants/lotto.js";
import Lotto from "../domains/Lotto.js";

class DrawnNumbers {
  #winningNumbers;
  #bonusNumber;

  constructor(numbersString, bonusNumberString) {
    this.#winningNumbers = this.#createWinningNumbers(numbersString);
    this.#validateBonusNumber(bonusNumberString);
    this.#bonusNumber = Number(bonusNumberString);
  }

  calculateRank(lotto) {
    const matchCount = lotto.compare(this.#winningNumbers);
    const hasBonus = lotto.includes(this.#bonusNumber);

    if (matchCount === 6) return "1st";
    if (matchCount === 5 && hasBonus) return "2nd";
    if (matchCount === 5) return "3rd";
    if (matchCount === 4) return "4th";
    if (matchCount === 3) return "5th";
    return "etc";
  }

  #createWinningNumbers(numbersString) {
    this.#validateWinningNumbers(numbersString);
    const winningNumberArray = numbersString.split(",").map(Number);
    return new Lotto(winningNumberArray);
  }

  #validateWinningNumbers(numbersString) {
    const trimmedString = numbersString.trim();
    if (trimmedString === "") {
      throw new Error("[ERROR] 당첨 번호를 입력해 주세요.");
    }

    const format = /^\s*\d+(\s*,\s*\d+)*\s*$/;
    if (!format.test(trimmedString)) {
      throw new Error("[ERROR] 당첨 번호는 쉼표로 구분되어야 합니다.");
    }
  }

  #validateBonusNumber(bonusNumberString) {
    const trimmedString = bonusNumberString.trim();
    if (trimmedString === "") {
      throw new Error("[ERROR] 보너스 번호를 입력해 주세요.");
    }

    const bonusNumber = Number(trimmedString);

    if (bonusNumber < LOTTO_MIN_VALUE) {
      throw new Error(
        `[ERROR] 로또 번호는 ${LOTTO_MIN_VALUE}에서 ${LOTTO_MAX_VALUE} 사이의 숫자여야 합니다.`
      );
    }

    if (bonusNumber > LOTTO_MAX_VALUE) {
      throw new Error(
        `[ERROR] 로또 번호는 ${LOTTO_MIN_VALUE}에서 ${LOTTO_MAX_VALUE} 사이의 숫자여야 합니다.`
      );
    }

    if (this.#winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 이미 당첨 번호에 포함된 번호입니다.");
    }
  }
}

export default DrawnNumbers;
