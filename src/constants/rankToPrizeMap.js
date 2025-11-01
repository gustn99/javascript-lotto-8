export const RANK = {
  "1ST": "1st",
  "2ND": "2nd",
  "3RD": "3rd",
  "4TH": "4th",
  "5TH": "5th",
  ETC: "etc",
};

export const RANK_TO_PRIZE_MAP = {
  [RANK["1ST"]]: 2000000000,
  [RANK["2ND"]]: 30000000,
  [RANK["3RD"]]: 1500000,
  [RANK["4TH"]]: 50000,
  [RANK["5TH"]]: 5000,
  [RANK["ETC"]]: 0,
};
