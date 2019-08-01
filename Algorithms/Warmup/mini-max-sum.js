/**
 * @title Mini-Max Sum
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/mini-max-sum/problem
 */

const getMinMax = arr => arr.reduce(
  ([min, max], cur) => [Math.min(min, cur), Math.max(max, cur)],
  [Infinity, -Infinity]
);

const getSum = arr => arr.reduce(
  (sum, cur) => sum + cur,
  0
);

const miniMaxSum = arr => {
  const [min, max] = getMinMax(arr);
  const sum = getSum(arr);

  console.log(`${sum - max} ${sum - min}`);
};
