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
    const purchaseAmount = await this.#inputView.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    this.#validatePurchaseAmount(purchaseAmount);

    const purchaseCount = purchaseAmount / PURCHASE_UNIT;
    const lottos = new Lottos(purchaseCount);
    this.#printPurchaseCount(purchaseCount);
    this.#printLottos(lottos);

    const winningNumberString = await this.#inputView.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    const bonusNumberString = await this.#inputView.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );

    const lottoDrawer = new LottoDrawer(winningNumberString, bonusNumberString);
    lottoDrawer.run(lottos);
    this.#printResult(lottos);
  }

  #validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount % PURCHASE_UNIT !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
    }
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

    const formattedRankResult = this.#formatter.formatRankResult(ranks);
    const formattedTotalReturn = this.#formatter.formatTotalReturn(totalReturn);

    this.#outputView.print("당첨 통계");
    this.#outputView.print(formattedRankResult);
    this.#outputView.print(formattedTotalReturn);
  }
}

export default LottoController;
