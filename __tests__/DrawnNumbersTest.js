import DrawnNumbers from "../src/models/DrawnNumbers";

describe("DrawnNumbers 클래스", () => {
  describe("생성자 테스트", () => {
    test("보너스 번호가 이미 당첨 번호에 포함되어 있으면 예외를 발생한다.", () => {
      expect(() => {
        new DrawnNumbers([1, 2, 3, 4, 5, 6], 1);
      }).toThrow("[ERROR]");
    });
  });
});
