//  https://www.hackerrank.com/challenges/js10-objects/problem

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
  this.perimeter = 2 * (length + width);
  this.area = length * width;
}
