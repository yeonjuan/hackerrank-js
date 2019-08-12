/**
 * @title Count Triplets
 * @difficulty Medium
 * @link https://www.hackerrank.com/challenges/count-triplets-1/problem
 */

const countIdx = arr => arr.reduce((indices, value, idx) => {
  indices[value] = (indices[value] || 0) + 1;

  return indices;
}, {});

const countTriplets = (arr, r) => {
  const right = countIdx(arr);
  const left = {};
  let cnt = 0;
  for (const num of arr) {
    right[num]--;
    if (num % r === 0) {
      cnt += (right[num * r] || 0) * (left[num / r] || 0);
    }
    left[num] = (left[num] || 0) + 1;
  }

  return cnt;
};
