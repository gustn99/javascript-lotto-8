import { LOTTO_ERROR_MESSAGES } from "../src/constants/errorMessages.js";
import Lotto from "../src/domains/Lotto.js";

describe("Lotto 클래스", () => {
  describe("생성자 테스트", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow(LOTTO_ERROR_MESSAGES.LENGTH);
    });

    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow(LOTTO_ERROR_MESSAGES.UNIQUE);
    });

    test("로또 번호에 1보다 작은 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([0, 2, 3, 4, 5, 6]);
      }).toThrow(LOTTO_ERROR_MESSAGES.MIN_VALUE);
    });

    test("로또 번호에 45보다 큰 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 46]);
      }).toThrow(LOTTO_ERROR_MESSAGES.MAX_VALUE);
    });
  });

  describe("compare 메서드 테스트", () => {
    test("두 로또 인스턴스 사이의 공통 원소 개수를 반환한다.", () => {
      const lotto1 = new Lotto([1, 3, 5, 7, 9, 11]);
      const lotto2 = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(lotto2.compare(lotto1)).toBe(3);
    });

    test("두 로또 인스턴스 사이에 공통 원소가 없으면 0을 반환한다.", () => {
      const lotto1 = new Lotto([1, 3, 5, 7, 9, 11]);
      const lotto2 = new Lotto([2, 4, 6, 8, 10, 12]);
      expect(lotto2.compare(lotto1)).toBe(0);
    });
  });

  describe("includes 메서드 테스트", () => {
    test("로또 인스턴스에 인자값이 포함되어 있으면 true를 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(lotto.includes(1)).toBe(true);
    });

    test("로또 인스턴스에 인자값이 포함되어 있지 않으면 false를 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(lotto.includes(7)).toBe(false);
    });
  });
});
