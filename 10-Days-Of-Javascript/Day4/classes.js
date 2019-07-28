/**
 * @title Classes
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/js10-class/problem
 */

const Polygon = class {
  constructor(lengthOfSides) {
    this.lengthOfSides = lengthOfSides;
  }

  perimeter() {
    let totalLength = 0;
    for (const length of this.lengthOfSides) {
      totalLength += length;
    }

    return totalLength;
  }
};
