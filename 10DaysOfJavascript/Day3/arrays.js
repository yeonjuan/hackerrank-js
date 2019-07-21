// https://www.hackerrank.com/challenges/js10-arrays/problem

const compareNumber = (a, b) => b - a;

const onlyUnique = (value, index, self) => self.indexOf(value) === index;

const getSecondLargest = nums => {
  nums.sort(compareNumber);
  const [, secondLargestNumber] = nums.filter(onlyUnique);

  return secondLargestNumber;
};
