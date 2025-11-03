export const RANK = {
  FIRST: "1st",
  SECOND: "2nd",
  THIRD: "3rd",
  FOURTH: "4th",
  FIFTH: "5th",
};

export const RANK_TO_PRIZE_MAP = {
  [RANK.FIRST]: 2000000000,
  [RANK.SECOND]: 30000000,
  [RANK.THIRD]: 1500000,
  [RANK.FOURTH]: 50000,
  [RANK.FIFTH]: 5000,
};

export const RANK_TO_MATCH_STRING_MAP = {
  [RANK.FIRST]: "6개 일치",
  [RANK.SECOND]: "5개 일치, 보너스 볼 일치",
  [RANK.THIRD]: "5개 일치",
  [RANK.FOURTH]: "4개 일치",
  [RANK.FIFTH]: "3개 일치",
};
