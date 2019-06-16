// https://www.hackerrank.com/challenges/reduced-string/problem

const superReducer = (accumulator, current) => (
  accumulator.endsWith(current)
    ? accumulator.substring(0, accumulator.length - 1)
    : accumulator + current
);

const superReducedString = (str) => [...str].reduce(superReducer) || 'Empty String';
