import { LOTTO_ERROR_MESSAGES } from "../constants/errorMessages.js";
import {
  LOTTO_MAX_VALUE,
  LOTTO_MIN_VALUE,
  LOTTO_SIZE,
} from "../constants/lotto.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_SIZE) {
      throw new Error(LOTTO_ERROR_MESSAGES.LENGTH);
    }

    const numberSet = new Set(numbers);
    if (numbers.length > numberSet.size) {
      throw new Error(LOTTO_ERROR_MESSAGES.UNIQUE);
    }

    if (numbers.some((num) => num < LOTTO_MIN_VALUE)) {
      throw new Error(LOTTO_ERROR_MESSAGES.MIN_VALUE);
    }

    if (numbers.some((num) => num > LOTTO_MAX_VALUE)) {
      throw new Error(LOTTO_ERROR_MESSAGES.MAX_VALUE);
    }
  }

  compare(anotherLotto) {
    return this.#numbers.reduce(
      (total, num) => (anotherLotto.includes(num) ? total + 1 : total),
      0
    );
  }

  includes(num) {
    return this.#numbers.includes(num);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
