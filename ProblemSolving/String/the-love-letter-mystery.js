// https://www.hackerrank.com/challenges/the-love-letter-mystery/problem

const getCharDistance = (charA, charB) => Math.abs(charA.charCodeAt(0) - charB.charCodeAt(0));

const theLoveLetterMystery = (str) => {
  let count = 0;
  const halfLength = str.length / 2;

  for (let index = 0; index < halfLength; index++) {
    const leftIndex = index;
    const rightIndex = str.length - 1 - index;
    const leftSideChar = str[leftIndex];
    const rightSideChar = str[rightIndex];
    count += getCharDistance(leftSideChar, rightSideChar);
  }

  return count;
};
