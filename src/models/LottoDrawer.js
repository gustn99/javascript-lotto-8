import DrawnNumbers from "./DrawnNumbers";

class LottoDrawer {
  #lottos;
  #drawnNumbers;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#drawnNumbers = new DrawnNumbers(winningNumbers, bonusNumber);
  }

  run() {
    const lottoArray = this.#lottos.getLottos();
    lottoArray.forEach((lotto) => {
      const rank = this.#drawnNumbers.calculateRank(lotto);
      this.#lottos.win(rank);
    });
  }
}

export default LottoDrawer;
