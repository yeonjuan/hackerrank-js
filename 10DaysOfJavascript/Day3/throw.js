// https://www.hackerrank.com/challenges/js10-throw/problem

const isPositive = num => {
  if (num > 0) {
    return 'YES';
  }
  if (num === 0) {
    throw new Error('Zero Error');
  }
  throw new Error('Negative Error');
};

