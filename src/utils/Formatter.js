import {
  RANK_TO_MATCH_STRING_MAP,
  RANK_TO_PRIZE_MAP,
} from "../constants/rank.js";

class Formatter {
  formatLottoNumbers(numbers) {
    return `[${numbers.join(", ")}]`;
  }

  formatLottos(lottoArray) {
    const numbersArray = lottoArray.map((lotto) => lotto.getNumbers());
    const formattedLottos = numbersArray.map((numbers) =>
      this.formatLottoNumbers(numbers)
    );
    return formattedLottos.join("\n");
  }

  formatPurchaseCount(purchaseCount) {
    return `${purchaseCount}개를 구매했습니다.`;
  }

  formatRankResult(ranks) {
    const formattedRankResult = Object.entries(RANK_TO_PRIZE_MAP).map(
      ([rank, prize]) =>
        `${RANK_TO_MATCH_STRING_MAP[rank]} (${prize.toLocaleString()}원) - ${
          ranks[rank]
        }개`
    );
    return formattedRankResult.join("\n");
  }

  formatTotalReturn(totalReturn) {
    return `총 수익률은 ${totalReturn}%입니다.`;
  }
}

export default Formatter;
