

import BigNumber from 'bignumber.js';
import { isLessThanOrEqual } from './safeMath';




export function isNumber(check: string) {
  if (check !== '' && check !== undefined && check !== null) {
    const numberOrNot = Number(check);
    return !isNaN(numberOrNot);
  }
  return false;
}


export const formatPositiveNumber = (rawValue: string, decimals?: number) => {
  if (!isNumber(rawValue)) {
    return rawValue;
  }

  if (isLessThanOrEqual(rawValue, '0')) {
    return '0';
  }

  let format: any = {
    prefix: '',
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ' ',
    fractionGroupSize: 0,
    suffix: '',
  };

  let bigValue = new BigNumber(rawValue);
  let value: string;

  if (decimals !== undefined) {
    value = bigValue.toFormat(decimals, format).toString();
  } else {
    value = bigValue.toFormat(format).toString();
  }
  value = value.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1');
  return value;
};

export function isErrorMsg(msg: any) {
  const errorMsgCheck = msg !== undefined && msg.success !== undefined && !msg.success;
  return msg === undefined || msg === false || errorMsgCheck;
}
