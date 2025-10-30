import Lotto from "../src/domains/Lotto.js";
import Lottos from "../src/models/Lottos.js";

describe("Lottos 클래스", () => {
  describe("생성자 테스트", () => {
    test("입력 개수만큼의 lottos 배열을 생성한다.", () => {
      const lottosInstance = new Lottos(3);
      const lottos = lottosInstance._getLottos();
      expect(lottos).toHaveLength(3);
    });

    test("lottos 배열은 Lotto 인스턴스로 구성된다.", () => {
      const lottosInstance = new Lottos(3);
      const lottos = lottosInstance._getLottos();
      lottos.forEach((lotto) => {
        expect(lotto).toBeInstanceOf(Lotto);
      });
    });

    test("ranks(등수 통계)를 초기화한다.", () => {
      const lottosInstance = new Lottos(3);
      const ranks = lottosInstance._getRanks();
      expect(ranks).toEqual({
        "1st": 0,
        "2nd": 0,
        "3rd": 0,
        "4th": 0,
        "5th": 0,
      });
    });

    test("totalReturn(총 수익률)을 초기화한다.", () => {
      const lottosInstance = new Lottos(3);
      const totalReturn = lottosInstance._getTotalReturn();
      expect(totalReturn).toBe(0);
    });
  });
});
