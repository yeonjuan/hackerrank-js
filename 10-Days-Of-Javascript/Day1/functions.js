/**
 * @title Functions
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/js10-function/problem
 */

const factorial = n => {
  let ret = 1;
  for (let i = 1; i <= n; i++) {
    ret *= i;
  }

  return ret;
};
