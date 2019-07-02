// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

const rotLeft = (array, leftRotationCount) => (
  [...array.slice(leftRotationCount), ...array.slice(0, leftRotationCount)]
);