/**
 * @title Mark and Toys
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/mark-and-toys/problem
 */

const ascendingCompare = (a, b) => a - b;

function maximumToys(prices, budget) {
  const sorted = prices.sort(ascendingCompare);
  const {length} = sorted;
  let sumPrice = 0;
  for (let idx = 0; idx < length; idx++) {
    sumPrice += sorted[idx];
    if (sumPrice > budget) {
      return idx;
    }
  }

  return length;
}
