/**
 * @title Count Objects
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/js10-count-objects/problem
 */

const getCount = objects => {
  let countEqual = 0;
  for (const object of objects) {
    if (object.x === object.y) {
      countEqual += 1;
    }
  }

  return countEqual;
};

