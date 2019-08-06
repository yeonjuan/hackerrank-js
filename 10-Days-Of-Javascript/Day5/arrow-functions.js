/**
 * @title Arrow Functions
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/js10-arrows/problem
 */

const isEven = num => (num % 2) === 0;

const modifyArray = nums => nums.map(num => {
  if (isEven(num)) {
    return num * 2;
  }

  return num * 3;
});

