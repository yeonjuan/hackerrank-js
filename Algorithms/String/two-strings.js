/**
 * @title Two Strings
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/two-strings/problem
 */

const intersect = (set1, set2) => new Set([...set1].filter(x => set2.has(x)));

const twoStrings = (str1, str2) => {
  const set1 = new Set([...str1]);
  const set2 = new Set([...str2]);
  const intersectSet = intersect(set1, set2);

  return intersectSet.size ? 'YES' : 'NO';
};

