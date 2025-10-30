import { Random } from "@woowacourse/mission-utils";
import Lotto from "../domains/Lotto";
import { RANK_TO_PRIZE_MAP } from "../constants/rankToPrizeMap";

class Lottos {
  #lottos;
  #ranks;
  #totalPrize;

  constructor(purchaseCount) {
    this.#lottos = Array.from({ length: purchaseCount }, () =>
      this.#createLotto()
    );
    this.#ranks = { "1st": 0, "2nd": 0, "3rd": 0, "4th": 0, "5th": 0 };
    this.#totalPrize = 0;
  }

  #createLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  win(rank) {
    this.#ranks[rank] += 1;
    this.#totalPrize += RANK_TO_PRIZE_MAP[rank];
  }

  format() {
    const formattedLottos = this.#lottos.map((lotto) => lotto.format());
    return formattedLottos.join("\n");
  }

  getLottos() {
    return this.#lottos;
  }

  _getRanks() {
    return this.#ranks;
  }

  _getTotalPrize() {
    return this.#totalPrize;
  }
}

export default Lottos;
