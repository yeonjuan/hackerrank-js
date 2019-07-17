const compareNumber = (a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }

  return 0;
};

const onlyUnique = (value, index, self) => self.indexOf(value) === index;

const getSecondLargest = nums => {
  nums.sort(compareNumber);
  const [largestNumber, secondLargestNumber] = nums.filter(onlyUnique);

  return secondLargestNumber;
};
