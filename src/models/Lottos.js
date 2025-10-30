import { Random } from "@woowacourse/mission-utils";
import Lotto from "../domains/Lotto";

class Lottos {
  #lottos;
  #ranks;
  #totalReturn;

  constructor(purchaseCount) {
    this.#lottos = Array.from({ length: purchaseCount }, () =>
      this.#createLotto()
    );
    this.#ranks = { "1st": 0, "2nd": 0, "3rd": 0, "4th": 0, "5th": 0 };
    this.#totalReturn = 0;
  }

  #createLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  format() {
    const formattedLottos = this.#lottos.map((lotto) => lotto.format());
    return formattedLottos.join("\n");
  }

  _getLottos() {
    return this.#lottos;
  }

  _getRanks() {
    return this.#ranks;
  }

  _getTotalReturn() {
    return this.#totalReturn;
  }
}

export default Lottos;
