import BigNumber from 'bignumber.js';
import { isNumber } from './formatters';

export function safeAdd(a: string, b: string) {
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  const bigSum = bigA.plus(bigB);
  return bigSum.toString();
}

export function safeSub(a: string, b: string) {
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  const bigSum = bigA.minus(bigB);
  return bigSum.toString();
}

export function safeMult(a: string, b: string) {
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  const bigProduct = bigA.multipliedBy(bigB);
  return bigProduct.toString();
}

export function safeDiv(a: string, b: string) {
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  const bigProduct = bigA.dividedBy(bigB);
  return bigProduct.toString();
}

export function safeMod(a: string, b: string) {
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  const bigProduct = bigA.modulo(bigB);
  return bigProduct.toString();
}

export function safePow(a: string, b: string) {
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  const bigProduct = bigA.exponentiatedBy(bigB);
  return bigProduct.toString();
}

export function safeAbs(a: string) {
  const bigA = new BigNumber(a);
  const bigProduct = bigA.absoluteValue();
  return bigProduct.toString();
}

export function isZero(a: string) {
  const isANum = isNumber(a);
  if (!isANum) {
    return false;
  }
  const bigA = new BigNumber(a);
  const isBigZero = bigA.isZero();
  return isANum && isBigZero;
}
export function isGreaterThan(a: string, b: string) {
  const isANum = isNumber(a);
  const isBNum = isNumber(a);
  if (!isANum || !isBNum) {
    return false;
  }
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  const isBigGreaterThan = bigA.isGreaterThan(bigB);
  return isBigGreaterThan;
}
export function isGreaterThanOrEqual(a: string, b: string) {
  const isANum = isNumber(a);
  const isBNum = isNumber(a);
  if (!isANum || !isBNum) {
    return false;
  }
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  const isBigGreaterThanOrEqual = bigA.isGreaterThanOrEqualTo(bigB);
  return isBigGreaterThanOrEqual;
}
export function isLessThan(a: string, b: string) {
  const isANum = isNumber(a);
  const isBNum = isNumber(a);
  if (!isANum || !isBNum) {
    return false;
  }
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  const isBigLessThan = bigA.isLessThan(bigB);
  return isBigLessThan;
}
export function isLessThanOrEqual(a: string, b: string) {
  const isANum = isNumber(a);
  const isBNum = isNumber(a);
  if (!isANum || !isBNum) {
    return false;
  }
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  const isBigLessThanOrEqual = bigA.isLessThanOrEqualTo(bigB);
  return isBigLessThanOrEqual;
}
export function isEqualTo(a: string, b: string) {
  const isANum = isNumber(a);
  const isBNum = isNumber(a);
  if (!isANum || !isBNum) {
    return false;
  }
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  const isBigEqual = bigA.isEqualTo(bigB);
  return isBigEqual;
}
