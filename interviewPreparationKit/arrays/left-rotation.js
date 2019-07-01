// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

const rotLeft = (array, leftRotationCount) => {
  const startIndex = leftRotationCount % array.length;
  return [...array.slice(startIndex), ...array.slice(0, startIndex)];
}
