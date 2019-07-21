//  https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

const reverseString = s => {
  try {
    console.log(s.split('').reverse().join(''));
  } catch (e) {
    console.log('s.split is not a function');
    console.log(s);
  }
};