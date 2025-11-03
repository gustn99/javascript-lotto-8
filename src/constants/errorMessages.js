import { error } from "../utils/error.js";
import { LOTTO_MAX_VALUE, LOTTO_SIZE } from "./lotto.js";
import { PURCHASE_UNIT } from "./unit.js";

export const PURCHASE_ERROR_MESSAGES = {
  NONEMPTY: error("구입 금액을 입력해 주세요."),
  UNIT: error(`구입 금액은 ${PURCHASE_UNIT}원 단위로 입력해야 합니다.`),
};

export const LOTTO_ERROR_MESSAGES = {
  UNIQUE: error("로또 번호는 중복될 수 없습니다."),
  LENGTH: error(`로또 번호는 ${LOTTO_SIZE}개여야 합니다.`),
  MIN_VALUE: error(
    `로또 번호는 ${LOTTO_MAX_VALUE}에서 ${LOTTO_MAX_VALUE} 사이의 숫자여야 합니다.`
  ),
  MAX_VALUE: error(
    `로또 번호는 ${LOTTO_MAX_VALUE}에서 ${LOTTO_MAX_VALUE} 사이의 숫자여야 합니다.`
  ),
};

export const WINNING_NUMBER_ERROR_MESSAGES = {
  NONEMPTY: error("당첨 번호를 입력해 주세요."),
  DELIMITER: error("당첨 번호는 쉼표로 구분되어야 합니다."),
};

export const BONUS_NUMBER_ERROR_MESSAGES = {
  NONEMPTY: error("보너스 번호를 입력해 주세요."),
  MIN_VALUE: error(
    `보너스 번호는 ${LOTTO_MAX_VALUE}에서 ${LOTTO_MAX_VALUE} 사이의 숫자여야 합니다.`
  ),
  MAX_VALUE: error(
    `보너스 번호는 ${LOTTO_MAX_VALUE}에서 ${LOTTO_MAX_VALUE} 사이의 숫자여야 합니다.`
  ),
  UNIQUE: error("이미 당첨 번호에 포함된 번호입니다."),
};

export const ERROR_MESSAGES = {
  PURCHASE: PURCHASE_ERROR_MESSAGES,
  LOTTO: LOTTO_ERROR_MESSAGES,
  WINNING_NUMBER: WINNING_NUMBER_ERROR_MESSAGES,
  BONUS_NUMBER: BONUS_NUMBER_ERROR_MESSAGES,
};
