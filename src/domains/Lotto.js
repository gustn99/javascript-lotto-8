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
      throw new Error(`[ERROR] 로또 번호는 ${LOTTO_SIZE}개여야 합니다.`);
    }

    const numberSet = new Set(numbers);
    if (numbers.length > numberSet.size) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }

    if (numbers.some((num) => num < LOTTO_MIN_VALUE)) {
      throw new Error(
        `[ERROR] 로또 번호는 ${LOTTO_MIN_VALUE}에서 ${LOTTO_MAX_VALUE} 사이의 숫자여야 합니다.`
      );
    }

    if (numbers.some((num) => num > LOTTO_MAX_VALUE)) {
      throw new Error(
        `[ERROR] 로또 번호는 ${LOTTO_MIN_VALUE}에서 ${LOTTO_MAX_VALUE} 사이의 숫자여야 합니다.`
      );
    }
  }

  format() {
    return `[${this.#numbers.join(", ")}]`;
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
}

export default Lotto;
