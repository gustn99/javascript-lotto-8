import InputView from "../view/InputView";
import OutputView from "../view/OutputView";

class LottoController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }
}

export default LottoController;
