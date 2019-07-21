// https://www.hackerrank.com/challenges/js10-throw/problem

const isPositive = num => {
  try {
    if (num > 0) {
      return 'YES';
    } else if (num === 0) {
      throw new Error('Zero Error');
    } else {
      throw new Error('Negative Error');
    }
  } catch (e) {
    return e.message;
  }
};

