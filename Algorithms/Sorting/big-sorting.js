/**
 * @title Big Sorting
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/big-sorting/problem
 */

const bigNumCompareFunc = (numStrA, numStrB) => {
  const {length: strLengthA} = numStrA;
  const {length: strLengthB} = numStrB;

  if (strLengthA === strLengthB) {
    return numStrA.localeCompare(numStrB);
  }

  return strLengthA - strLengthB;
};

const bigSorting = unsorted => {
  const unsortedArr = unsorted;
  unsortedArr.sort(bigNumCompareFunc);

  return unsortedArr;
};
