/**
 * @title Separate the Numbers
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/separate-the-numbers/problem
 */

const getDiff = (value1, value2) => value2 - value1;

const digitCheck = (digit, value) => {
  let ret = 1;
  let mod = Number(value);
  while (mod / 10 >= 1) {
    mod /= 10;
    ret++;
  }

  return digit === ret;
};

// Complete the separateNumbers function below.
const separateNumbers = query => {
  const {length} = query;
  for (let digit = 1; digit <= length / 2; digit++) {
    let idx = 0;
    let curDigit = digit;
    let curValue = BigInt(query.substr(idx, curDigit));
    idx += curDigit;
    let nextDigit = curDigit;
    let nextValue = BigInt(query.substr(idx, nextDigit));

    while (idx < length) {
      if (!digitCheck(nextDigit, nextValue)) {
        break;
      }
      const diff = Number(getDiff(curValue, nextValue));
      if (diff === 1) {
        curValue = nextValue;
        curDigit = nextDigit;
        idx += nextDigit;
        nextValue = BigInt(query.substr(idx, nextDigit));
      } else if (nextDigit - curDigit === 0) {
        nextDigit++;
        nextValue = BigInt(query.substr(idx, nextDigit));
      } else {
        break;
      }
    }
    if (idx >= length) {
      console.log('YES', query.substr(0, digit));

      return;
    }
  }
  console.log('NO');
};
