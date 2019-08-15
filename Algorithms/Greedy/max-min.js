/**
 * @title Max Min
 * @difficulty Median
 * @link https://www.hackerrank.com/challenges/angry-children/problem
 */

const getUnfairness = (arr, length) => arr[length - 1] - arr[0];

function maxMin(subarrLength, arr) {
  const {length: arrLength} = arr;
  const sorted = arr.sort((a, b) => a - b);

  let unfairness = Infinity;
  for (let startIdx = 0; startIdx <= arrLength - subarrLength; startIdx++) {
    unfairness = Math.min(unfairness, getUnfairness(sorted.slice(startIdx, startIdx + subarrLength), subarrLength));
  }

  return unfairness;
}
