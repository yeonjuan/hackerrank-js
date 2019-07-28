/**
 * @title Inheritance
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/js10-inheritance/problem
 */

/* eslint-disable no-undef */
Rectangle.prototype.area = function() {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}
/* eslint-enable no-undef */
