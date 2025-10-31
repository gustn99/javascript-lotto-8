import Lotto from "../src/domains/Lotto.js";

describe("Lotto 클래스", () => {
  describe("생성자 테스트", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호에 1보다 작은 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([0, 2, 3, 4, 5, 6]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호에 45보다 큰 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 46]);
      }).toThrow("[ERROR]");
    });
  });

  describe("format 메서드 테스트", () => {
    test("배열을 문자열 형식으로 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(lotto.format()).toBe("[1, 2, 3, 4, 5, 6]");
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
