/**
 * @title Separate the Numbers
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/separate-the-numbers/problem
 */

const digitCheck = (digit, value) => {
  let ret = 1;
  let mod = Number(value);
  while (mod / 10 >= 1) {
    mod /= 10;
    ret++;
  }

  return digit === ret;
};

const isPossible = (query, digit) => {
  const {length} = query;
  let idx = 0;
  let curDigit = digit;
  let curValue = BigInt(query.substr(idx, curDigit)); // eslint-disable-line
  idx += curDigit;
  let nextDigit = curDigit;
  let nextValue = BigInt(query.substr(idx, nextDigit)); // eslint-disable-line

  while (idx < length) {
    if (!digitCheck(nextDigit, nextValue)) {
      break;
    }

    const diff = Number(nextValue - curValue);
    if (diff === 1) {
      curValue = nextValue;
      curDigit = nextDigit;
      idx += nextDigit;
      nextValue = BigInt(query.substr(idx, nextDigit)); // eslint-disable-line
    } else if (nextDigit - curDigit === 0) {
      nextDigit++;
      nextValue = BigInt(query.substr(idx, nextDigit)); // eslint-disable-line
    } else {
      break;
    }
  }

  return (idx >= length);
};

// Complete the separateNumbers function below.
const separateNumbers = query => {
  const {length} = query;
  for (let digit = 1; digit <= length / 2; digit++) {
    if (isPossible(query, digit)) {
      console.log('YES', query.substring(0, digit));

      return;
    }
  }
  console.log('NO');
};
