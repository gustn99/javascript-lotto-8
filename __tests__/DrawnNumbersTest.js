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

  describe("matchCount 메서드 테스트", () => {
    test("당첨 번호에 포함된 로또 번호 개수를 반환한다.", () => {
      const lottoInstance = new Lotto([1, 3, 5, 7, 9, 11]);
      const drawnNumbersInstance = new DrawnNumbers("1,2,3,4,5,6", "7");
      expect(drawnNumbersInstance.matchCount(lottoInstance)).toBe(3);
    });

    test("당첨 번호에 포함된 로또 번호가 없으면 0을 반환한다.", () => {
      const lottoInstance = new Lotto([7, 8, 9, 10, 11, 12]);
      const drawnNumbersInstance = new DrawnNumbers("1,2,3,4,5,6", "7");
      expect(drawnNumbersInstance.matchCount(lottoInstance)).toBe(0);
    });
  });
});
