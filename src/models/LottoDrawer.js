import DrawnNumbers from "./DrawnNumbers";

class LottoDrawer {
  #lottos;
  #drawnNumbers;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#drawnNumbers = new DrawnNumbers(winningNumbers, bonusNumber);
  }
}

export default LottoDrawer;
