import { RANK, RANK_TO_PRIZE_MAP } from "../src/constants/rankToPrizeMap.js";
import { PURCHASE_UNIT } from "../src/constants/unit.js";
import Lotto from "../src/domains/Lotto.js";
import Lottos from "../src/models/Lottos.js";

const PURCHASE_COUNT = 3;

describe("Lottos 클래스", () => {
  describe("생성자 테스트", () => {
    test("입력 개수만큼의 lottos 배열을 생성한다.", () => {
      const lottosInstance = new Lottos(PURCHASE_COUNT);
      const lottos = lottosInstance.getLottos();
      expect(lottos).toHaveLength(PURCHASE_COUNT);
    });

    test("lottos 배열은 Lotto 인스턴스로 구성된다.", () => {
      const lottosInstance = new Lottos(PURCHASE_COUNT);
      const lottos = lottosInstance.getLottos();
      lottos.forEach((lotto) => {
        expect(lotto).toBeInstanceOf(Lotto);
      });
    });
  });

  describe("win 메서드 테스트", () => {
    test("순위에 따라 등수 통계를 업데이트한다.", () => {
      Object.values(RANK).forEach((rank) => {
        const lottosInstance = new Lottos(PURCHASE_COUNT);
        lottosInstance.win(rank);
        const ranks = lottosInstance._getRanks();
        expect(ranks[rank]).toBe(1);
      });
    });

    test("순위에 따라 총 상금을 업데이트한다.", () => {
      Object.entries(RANK_TO_PRIZE_MAP).forEach(([rank, prize]) => {
        const lottosInstance = new Lottos(PURCHASE_COUNT);
        lottosInstance.win(rank);
        const totalPrize = lottosInstance._getTotalPrize();
        expect(totalPrize).toBe(prize);
      });
    });
  });

  describe("format 메서드 테스트", () => {
    test("모든 Lotto 객체의 format 결과를 줄바꿈으로 연결해 반환한다.", () => {
      const lottosInstance = new Lottos(PURCHASE_COUNT);
      const formattedLottos = lottosInstance.format();
      const formattedLottoArray = formattedLottos.split("\n");

      expect(formattedLottoArray).toHaveLength(PURCHASE_COUNT);
      formattedLottoArray.forEach((str) => {
        expect(str).toMatch(/\[\d+(, \d+){5}\]/);
      });
    });
  });

  describe("calculateTotalReturn 메서드 테스트", () => {
    test("상금을 수익률 형태로 변환해 반환한다.", () => {
      Object.entries(RANK_TO_PRIZE_MAP).forEach(([rank, prize]) => {
        const lottosInstance = new Lottos(PURCHASE_COUNT);
        lottosInstance.win(rank);

        const purchaseAmount = PURCHASE_COUNT * PURCHASE_UNIT;
        const expectedTotalPrize = prize;
        const expectedTotalReturn = (
          expectedTotalPrize / purchaseAmount
        ).toFixed(2);

        const totalReturn = lottosInstance.calculateTotalReturn();
        expect(totalReturn).toBe(expectedTotalReturn);
      });
    });
  });
});
