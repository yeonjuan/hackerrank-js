// https://www.hackerrank.com/challenges/js10-data-types/problem

const performOperation = (secondInteger, secondDecimal, secondString) => {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = 'HackerRank ';

  console.log(firstInteger + parseInt(secondInteger, 10));
  console.log(firstDecimal + parseFloat(secondDecimal));
  console.log(firstString + secondString);
};

