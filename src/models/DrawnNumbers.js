import {
  BONUS_NUMBER_ERROR_MESSAGES,
  WINNING_NUMBER_ERROR_MESSAGES,
} from "../constants/errorMessages.js";
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
    return undefined;
  }

  #createWinningNumbers(numbersString) {
    this.#validateWinningNumbers(numbersString);
    const winningNumberArray = numbersString.split(",").map(Number);
    return new Lotto(winningNumberArray);
  }

  #validateWinningNumbers(numbersString) {
    const trimmedString = numbersString.trim();
    if (trimmedString === "") {
      throw new Error(WINNING_NUMBER_ERROR_MESSAGES.NONEMPTY);
    }

    const format = /^\s*\d+(\s*,\s*\d+)*\s*$/;
    if (!format.test(trimmedString)) {
      throw new Error(WINNING_NUMBER_ERROR_MESSAGES.DELIMITER);
    }
  }

  #validateBonusNumber(bonusNumberString) {
    const trimmedString = bonusNumberString.trim();
    if (trimmedString === "") {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGES.NONEMPTY);
    }

    const bonusNumber = Number(trimmedString);

    if (bonusNumber < LOTTO_MIN_VALUE) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGES.MIN_VALUE);
    }

    if (bonusNumber > LOTTO_MAX_VALUE) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGES.MAX_VALUE);
    }

    if (this.#winningNumbers.includes(bonusNumber)) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGES.UNIQUE);
    }
  }
}

export default DrawnNumbers;
