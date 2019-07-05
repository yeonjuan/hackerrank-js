// https://www.hackerrank.com/challenges/find-the-median/problem

const findMedian = arr => {
  const middle = parseInt(arr.length / 2, 10);

  return arr.sort((a, b) => a - b)[middle];
};
