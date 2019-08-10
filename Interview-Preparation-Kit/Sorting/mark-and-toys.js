/**
 * @title Mark and Toys
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/mark-and-toys/problem
 */

const ascendingCompare = (a, b) => a - b;

const maximumToys = (prices, budget) => {
  const sorted = prices.sort(ascendingCompare);
  let sumPrice = 0;

  for (const idx in sorted) {
    if (sorted.isOwnProperty(idx)) {
      sumPrice += sorted[idx];
      if (sumPrice > budget) {
        return idx;
      }
    }
  }

  return prices.length;
}
