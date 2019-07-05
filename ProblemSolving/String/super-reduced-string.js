// https://www.hackerrank.com/challenges/reduced-string/problem

const superReducer = (accumulator, current) => (
  accumulator.endsWith(current)
    ? accumulator.slice(0, -1)
    : accumulator + current
);

const superReducedString = str => [...str].reduce(superReducer) || 'Empty String';
