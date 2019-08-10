/**
 * @title Sherlock and the Valid String
 * @difficulty Medium
 * @link https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
 */

const countChars = chars => chars.reduce((counter, char) => {
  counter[char] = (counter[char] || 0) + 1;

  return counter;
}, {});

const hasEqual = (count, idx, [initial]) => count === initial;

const isValid = str => {
  const counts = Object.values(countChars([...str]));
  const min = Math.min.apply(null, counts);
  const mins = counts.filter(count => count === min);
  const biggers = counts.filter(count => count > min);

  if (counts.every(hasEqual)) {
    return 'YES';
  }

  if (mins.length === 1
    && biggers.every(hasEqual)) {
    return 'YES';
  }

  if (biggers.length === 1
    && biggers.every(bigger => bigger - min === 1)) {
    return 'YES';
  }

  return 'NO';
};
