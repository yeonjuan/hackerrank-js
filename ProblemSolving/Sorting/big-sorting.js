// https://www.hackerrank.com/challenges/big-sorting/problem

const bigNumCompareFunc = (numStrA, numStrB) => {
  const {length: strLengthA} = numStrA;
  const {length: strLengthB} = numStrB;

  if (strLengthA === strLengthB) {
    for (let index = 0; index < strLengthB; index++) {
      const placeNumA = numStrA[index];
      const placeBumB = numStrB[index];
      if (placeNumA !== placeBumB) {
        return placeNumA - placeBumB;
      }
    }
  }

  return strLengthA - strLengthB;
};

const bigSorting = unsorted => {
  const unsortedArr = unsorted;
  unsortedArr.sort(bigNumCompareFunc);

  return unsortedArr;
};
