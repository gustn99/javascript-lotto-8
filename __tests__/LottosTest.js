import { RANK_TO_PRIZE_MAP } from "../src/constants/rankToPrizeMap.js";
import Lotto from "../src/domains/Lotto.js";
import Lottos from "../src/models/Lottos.js";

const PURCASE_COUNT = 3;

describe("Lottos 클래스", () => {
  describe("생성자 테스트", () => {
    test("입력 개수만큼의 lottos 배열을 생성한다.", () => {
      const lottosInstance = new Lottos(PURCASE_COUNT);
      const lottos = lottosInstance.getLottos();
      expect(lottos).toHaveLength(PURCASE_COUNT);
    });

    test("lottos 배열은 Lotto 인스턴스로 구성된다.", () => {
      const lottosInstance = new Lottos(PURCASE_COUNT);
      const lottos = lottosInstance.getLottos();
      lottos.forEach((lotto) => {
        expect(lotto).toBeInstanceOf(Lotto);
      });
    });

    test("등수 통계를 초기화한다.", () => {
      const lottosInstance = new Lottos(PURCASE_COUNT);
      const ranks = lottosInstance._getRanks();
      expect(ranks).toEqual({
        "1st": 0,
        "2nd": 0,
        "3rd": 0,
        "4th": 0,
        "5th": 0,
      });
    });

    test("총 상금을 초기화한다.", () => {
      const lottosInstance = new Lottos(PURCASE_COUNT);
      const totalPrize = lottosInstance._getTotalPrize();
      expect(totalPrize).toBe(0);
    });
  });

  describe("win 메서드 테스트", () => {
    test("순위에 따라 등수 통계를 업데이트한다.", () => {
      Object.keys(RANK_TO_PRIZE_MAP).forEach((rank) => {
        const lottosInstance = new Lottos(PURCASE_COUNT);
        lottosInstance.win(rank);
        const ranks = lottosInstance._getRanks();
        expect(ranks[rank]).toBe(1);
      });
    });

    test("순위에 따라 총 상금을 업데이트한다.", () => {
      Object.keys(RANK_TO_PRIZE_MAP).forEach((rank) => {
        const lottosInstance = new Lottos(PURCASE_COUNT);
        lottosInstance.win(rank);
        const totalPrize = lottosInstance._getTotalPrize();
        expect(totalPrize).toBe(RANK_TO_PRIZE_MAP[rank]);
      });
    });
  });

  describe("format 메서드 테스트", () => {
    test("모든 Lotto 객체의 format 결과를 줄바꿈으로 연결해 반환한다.", () => {
      const lottosInstance = new Lottos(PURCASE_COUNT);
      const formattedLottos = lottosInstance.format();
      const formattedLottoArray = formattedLottos.split("\n");

      expect(formattedLottoArray).toHaveLength(PURCASE_COUNT);
      formattedLottoArray.forEach((str) => {
        expect(str).toMatch(/\[\d+(, \d+){5}\]/);
      });
    });
  });
});
