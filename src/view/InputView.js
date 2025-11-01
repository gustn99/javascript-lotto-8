import { Console } from "@woowacourse/mission-utils";

class InputView {
  async readLineAsync(question) {
    return await Console.readLineAsync(`${question}\n`);
  }
}

export default InputView;
