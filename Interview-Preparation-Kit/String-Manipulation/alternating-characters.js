/**
 * @title Alternating Characters
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/alternating-characters/problem
 */

const alternatingCharacters = chars => {
  let countDeleted = 0;
  const {length} = chars;

  for (let idx = 0; idx < length - 1; idx++) {
    if (chars[idx] === chars[idx + 1]) {
      countDeleted++;
    }
  }

  return countDeleted;
};
