import Lotto from "../src/domains/Lotto";
import DrawnNumbers from "../src/models/DrawnNumbers";

describe("DrawnNumbers 클래스", () => {
  describe("생성자 테스트", () => {
    test("당첨 번호 입력이 없으면 예외가 발생한다.", () => {
      expect(() => {
        new DrawnNumbers("", "1");
      }).toThrow("[ERROR]");
    });

    test("당첨 번호 입력이 공백이면 예외가 발생한다.", () => {
      expect(() => {
        new DrawnNumbers(" ", "1");
      }).toThrow("[ERROR]");
    });

    test("당첨 번호가 쉼표 외 구분자로 분리되어 있으면 예외가 발생한다.", () => {
      expect(() => {
        new DrawnNumbers("1. 2. 3. 4. 5. 6", "1");
      }).toThrow("[ERROR]");
    });

    test("보너스 번호 입력이 없으면 예외가 발생한다.", () => {
      expect(() => {
        new DrawnNumbers("1, 2, 3, 4, 5, 6", "");
      }).toThrow("[ERROR]");
    });

    test("보너스 번호 입력이 공백이면 예외가 발생한다.", () => {
      expect(() => {
        new DrawnNumbers("1, 2, 3, 4, 5, 6", " ");
      }).toThrow("[ERROR]");
    });

    test("보너스 번호가 1보다 작으면 예외가 발생한다.", () => {
      expect(() => {
        new DrawnNumbers("1, 2, 3, 4, 5, 6", "0");
      }).toThrow("[ERROR]");
    });

    test("보너스 번호가 45보다 크면 예외가 발생한다.", () => {
      expect(() => {
        new DrawnNumbers("1, 2, 3, 4, 5, 6", "46");
      }).toThrow("[ERROR]");
    });

    test("보너스 번호가 이미 당첨 번호에 포함되어 있으면 예외가 발생한다.", () => {
      expect(() => {
        new DrawnNumbers("1, 2, 3, 4, 5, 6", "1");
      }).toThrow("[ERROR]");
    });
  });
});
