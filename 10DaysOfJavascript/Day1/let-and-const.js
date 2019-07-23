// https://www.hackerrank.com/challenges/js10-let-and-const/problem
/* global readLine b:writable */
/* eslint-disable no-const-assign */

function main() {
  const {PI} = Math;
  const r = readLine();

  console.log(Math.pow(parseFloat(r), 2) * PI);
  console.log(2 * PI * parseFloat(r));

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
/* eslint-enable no-const-assign */
