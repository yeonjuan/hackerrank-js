// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

const getMinDifferenceInSorted = sorted => {
  let minDiff = Infinity;
  sorted.forEach((value, index, arr) => {
    const nextIndex = index + 1;
    if (nextIndex < arr.length) {
      const absDiff = Math.abs(value - arr[nextIndex]);
      minDiff = Math.min(minDiff, absDiff);
    }
  });

  return minDiff;
};

const minimumAbsoluteDifference = arr => getMinDifferenceInSorted(arr.sort());
