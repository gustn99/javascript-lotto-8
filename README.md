# javascript-lotto-precourse

## 기능 개요

1. 로또 구매
2. 자동 로또 생성
3. 로또 추첨
4. 당첨 결과 및 수익률 출력

## 세부 기능 목록

1. 구매 금액 입력
   - 빈 문자열 예외
   - 1000원 단위가 아니면 예외

<br/>

2. 구매 금액을 기준으로 로또 번호 생성
3. 구매한 로또 개수와 생성된 로또 번호 출력

<br/>

4. 당첨 번호 입력
   - 빈 문자열 예외
   - 번호가 쉼표로 구분되지 않으면 예외
   - 쉼표로 구분된 번호가 6개가 아니면 예외
   - 1-45 사이 숫자가 아니면 예외
   - 중복 숫자가 있으면 예외
5. 보너스 번호 입력
   - 빈 문자열 예외
   - 1-45 사이 숫자가 아니면 예외
   - 당첨 번호 중 하나라도 중복되면 예외

<br/>

6. 랜덤 생성된 로또 번호들마다 당첨 여부 확인
7. 총 수익률 계산
8. 당첨 통계(1-5등 개수, 총 수익률) 출력

## 폴더 구조

```bash
src
├─ constants
│ ├─ errorMessages.js
│ ├─ inputMessages.js
│ ├─ lotto.js
│ ├─ rank.js
│ └─ unit.js
├─ controller
│ └─ LottoController.js    // 전체 로또 추첨 흐름 제어
├─ domains
│ └─ Lotto.js              // 단일 로또 상태 관리
├─ models
│ ├─ DrawnNumbers.js       // 당첨 번호 + 보너스 번호 상태 관리
│ ├─ LottoDrawer.js        // DrawnNumbers -> Lottos 상태 업데이트
│ └─ Lottos.js             // 사용자 로또 번호 상태 관리
├─ utils
│ ├─ error.js
│ └─ Formatter.js          // 출력문 형식 관리
└─ view
  ├─ InputView.js          // 사용자 입력 처리
  └─ OutputView.js         // 출력 처리
```
