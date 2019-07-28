/**
 * @title HackerRank in a String!
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
 */

const hackerrankInString = originString => {
  const HACKERRANK = 'hackerrank';
  let curIndex = 0;
  let remainingString = originString;
  while (curIndex < HACKERRANK.length) {
    const foundIndex = remainingString.indexOf(HACKERRANK[curIndex++]);
    if (foundIndex < 0) {
      return 'NO';
    }
    remainingString = remainingString.substring(foundIndex + 1);
  }

  return 'YES';
};
