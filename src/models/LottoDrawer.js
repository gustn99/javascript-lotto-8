import DrawnNumbers from "./DrawnNumbers.js";

class LottoDrawer {
  #drawnNumbers;

  constructor(winningNumbers, bonusNumber) {
    this.#drawnNumbers = new DrawnNumbers(winningNumbers, bonusNumber);
  }

  run(lottos) {
    const lottoArray = lottos.getLottos();
    lottoArray.forEach((lotto) => {
      const rank = this.#drawnNumbers.calculateRank(lotto);
      if (rank) lottos.win(rank);
    });
  }
}

export default LottoDrawer;
