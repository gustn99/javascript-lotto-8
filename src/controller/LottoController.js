import { PURCHASE_ERROR_MESSAGES } from "../constants/errorMessages.js";
import { INPUT_MESSAGES } from "../constants/inputMessages.js";
import { PURCHASE_UNIT } from "../constants/unit.js";
import LottoDrawer from "../models/LottoDrawer.js";
import Lottos from "../models/Lottos.js";
import Formatter from "../utils/Formatter.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LottoController {
  #inputView;
  #outputView;
  #formatter;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#formatter = new Formatter();
  }

  async run() {
    const purchaseCount = await this.#readPurchaseCount();
    const lottos = new Lottos(purchaseCount);
    this.#printInputResult(purchaseCount, lottos);

    const { winningNumber, bonusNumber } = await this.#readDrawnNumbers();
    const lottoDrawer = new LottoDrawer(winningNumber, bonusNumber);
    lottoDrawer.run(lottos);

    this.#printResult(lottos);
  }

  async #readPurchaseCount() {
    const purchaseAmount = await this.#inputView.readLineAsync(
      INPUT_MESSAGES.PURCHASE_AMOUNT
    );
    this.#validatePurchaseAmount(purchaseAmount);

    const purchaseCount = purchaseAmount / PURCHASE_UNIT;
    return purchaseCount;
  }

  #validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount === "") {
      throw new Error(PURCHASE_ERROR_MESSAGES.NONEMPTY);
    }

    if (purchaseAmount % PURCHASE_UNIT !== 0) {
      throw new Error(PURCHASE_ERROR_MESSAGES.UNIT);
    }
  }

  async #readDrawnNumbers() {
    const winningNumber = await this.#inputView.readLineAsync(
      INPUT_MESSAGES.WINNING_NUMBER
    );
    const bonusNumber = await this.#inputView.readLineAsync(
      INPUT_MESSAGES.BONUS_NUMBER
    );

    return { winningNumber, bonusNumber };
  }

  #printInputResult(purchaseCount, lottos) {
    this.#printPurchaseCount(purchaseCount);
    this.#printLottos(lottos);
  }

  #printPurchaseCount(purchaseCount) {
    const formattedPurchaseCount =
      this.#formatter.formatPurchaseCount(purchaseCount);
    this.#outputView.print(formattedPurchaseCount);
  }

  #printLottos(lottos) {
    const lottoArray = lottos.getLottos();
    const formattedLottos = this.#formatter.formatLottos(lottoArray);
    this.#outputView.print(formattedLottos);
  }

  #printResult(lottos) {
    const ranks = lottos.getRanks();
    const totalReturn = lottos.calculateTotalReturn();

    this.#outputView.print("당첨 통계");
    this.#printRankResult(ranks);
    this.#printTotalReturn(totalReturn);
  }

  #printRankResult(ranks) {
    const formattedRankResult = this.#formatter.formatRankResult(ranks);
    this.#outputView.print(formattedRankResult);
  }

  #printTotalReturn(totalReturn) {
    const formattedTotalReturn = this.#formatter.formatTotalReturn(totalReturn);
    this.#outputView.print(formattedTotalReturn);
  }
}

export default LottoController;
