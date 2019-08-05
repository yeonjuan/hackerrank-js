/**
 * @title Counting Sort 1
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/countingsort1/problem
 */

const count = nums => nums.reduce((counter, num) => {
  counter[num] = (counter[num] || 0) + 1;

  return counter;
}, {});

const countingSort = arr => {
  const numCount = count(arr);
  const frequencyCounts = [];
  for (let i = 0; i < 100; i++) {
    frequencyCounts.push(numCount[i] || 0);
  }

  return frequencyCounts;
};
