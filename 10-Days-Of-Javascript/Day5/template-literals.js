/**
 * @title Template Literals
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/js10-template-literals/problem
 */

const sides = (literals, ...expressions) => {
  const [area, perimeter] = expressions;

  const root = Math.sqrt((perimeter * perimeter) - (16 * area));

  const s1 = (perimeter + root) / 4;
  const s2 = (perimeter - root) / 4;

  return [s1, s2].sort();
};
