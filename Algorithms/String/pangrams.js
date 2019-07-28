/**
 * @title Pangrams
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/pangrams/problem
 */

const pangrams = str => {
  const set = toSet(str);

  return [...'abcdefghijklmnopqrstuvwxyz'].every(alphabet => set.has(alphabet))
    ? 'pangram'
    : 'not pangram';
};

const toSet = str => new Set([...str.toLowerCase()]);
