import { RANK } from "../src/constants/rankToPrizeMap";
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

  describe("calculateRank 메서드 테스트", () => {
    test("당첨 번호와 로또 번호가 6개 모두 일치하는 경우 1등을 반환한다.", () => {
      const lottoInstance = new Lotto([1, 2, 3, 4, 5, 6]);
      const drawnNumbersInstance = new DrawnNumbers("1,2,3,4,5,6", "7");
      expect(drawnNumbersInstance.calculateRank(lottoInstance)).toBe(
        RANK["1ST"]
      );
    });

    test("당첨 번호와 로또 번호가 5개 일치하고, 로또 번호에 보너스 번호가 포함되어 있는 경우 2등을 반환한다.", () => {
      const lottoInstance = new Lotto([1, 2, 3, 4, 5, 7]);
      const drawnNumbersInstance = new DrawnNumbers("1,2,3,4,5,6", "7");
      expect(drawnNumbersInstance.calculateRank(lottoInstance)).toBe(
        RANK["2ND"]
      );
    });

    test("당첨 번호와 로또 번호가 5개 일치하는 경우 3등을 반환한다.", () => {
      const lottoInstance = new Lotto([1, 2, 3, 4, 5, 8]);
      const drawnNumbersInstance = new DrawnNumbers("1,2,3,4,5,6", "7");
      expect(drawnNumbersInstance.calculateRank(lottoInstance)).toBe(
        RANK["3RD"]
      );
    });

    test("당첨 번호와 로또 번호가 4개 일치하는 경우 4등을 반환한다.", () => {
      const lottoInstance = new Lotto([1, 2, 3, 4, 7, 8]);
      const drawnNumbersInstance = new DrawnNumbers("1,2,3,4,5,6", "7");
      expect(drawnNumbersInstance.calculateRank(lottoInstance)).toBe(
        RANK["4TH"]
      );
    });

    test("당첨 번호와 로또 번호가 3개 일치하는 경우 5등을 반환한다.", () => {
      const lottoInstance = new Lotto([1, 2, 3, 7, 8, 9]);
      const drawnNumbersInstance = new DrawnNumbers("1,2,3,4,5,6", "7");
      expect(drawnNumbersInstance.calculateRank(lottoInstance)).toBe(
        RANK["5TH"]
      );
    });
  });
});
