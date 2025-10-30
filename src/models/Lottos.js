import { Random } from "@woowacourse/mission-utils";
import { RANK_TO_PRIZE_MAP } from "../constants/rankToPrizeMap";
import { PURCHASE_UNIT } from "../constants/unit";
import {
  LOTTO_MAX_VALUE,
  LOTTO_MIN_VALUE,
  LOTTO_SIZE,
} from "../constants/lotto";
import Lotto from "../domains/Lotto";

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
    const start = LOTTO_MIN_VALUE;
    const end = LOTTO_MAX_VALUE;
    const size = LOTTO_SIZE;
    const numbers = Random.pickUniqueNumbersInRange(start, end, size);
    return new Lotto(numbers);
  }

  win(rank) {
    this.#ranks[rank] += 1;
    this.#totalPrize += RANK_TO_PRIZE_MAP[rank];
  }

  calculateTotalReturn() {
    const purchaseCount = this.#lottos.length;
    const purchaseAmount = purchaseCount * PURCHASE_UNIT;

    const totalReturn = (this.#totalPrize / purchaseAmount).toFixed(2);
    return totalReturn;
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
