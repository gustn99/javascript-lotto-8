import { Random } from "@woowacourse/mission-utils";
import { RANK, RANK_TO_PRIZE_MAP } from "../constants/rank.js";
import { PURCHASE_UNIT } from "../constants/unit.js";
import {
  LOTTO_MAX_VALUE,
  LOTTO_MIN_VALUE,
  LOTTO_SIZE,
} from "../constants/lotto.js";
import Lotto from "../domains/Lotto.js";

class Lottos {
  #lottos;
  #ranks;
  #totalPrize;

  constructor(purchaseCount) {
    this.#lottos = Array.from({ length: purchaseCount }, () =>
      this.#createLotto()
    );
    this.#ranks = this.#createRankCount();
    this.#totalPrize = 0;
  }

  #createLotto() {
    const start = LOTTO_MIN_VALUE;
    const end = LOTTO_MAX_VALUE;
    const size = LOTTO_SIZE;
    const numbers = Random.pickUniqueNumbersInRange(start, end, size);
    return new Lotto(numbers);
  }

  #createRankCount() {
    return Object.values(RANK).reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});
  }

  win(rank) {
    this.#ranks[rank] += 1;
    this.#totalPrize += RANK_TO_PRIZE_MAP[rank];
  }

  calculateTotalReturn() {
    const purchaseCount = this.#lottos.length;
    const purchaseAmount = purchaseCount * PURCHASE_UNIT;

    const totalReturn = (this.#totalPrize / purchaseAmount).toFixed(1);
    return totalReturn;
  }

  getLottos() {
    return this.#lottos;
  }

  getRanks() {
    return this.#ranks;
  }

  _getTotalPrize() {
    return this.#totalPrize;
  }
}

export default Lottos;
